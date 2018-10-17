# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  devise :omniauthable, omniauth_providers: [:google_oauth2]

  has_many :notebooks,
  foreign_key: :author_id,
  class_name: :Notebook

  has_many :notes,
  foreign_key: :author_id,
  class_name: :Note

  after_initialize :ensure_session_token

  attr_reader :password

  def self.from_omniauth(access_token)
    data = access_token.info
    user = User.where(email: data['email']).first

    # Uncomment the section below if you want users to be created if they don't exist
    unless user
      username = data['email'].split('@')[0];
      user = User.create(
        username: username, 
        email: data['email'], 
        password: Devise.friendly_token[0,20]
      )
    end
    user
end

  def self.find_by_credentials(username_or_email, password)
    user = User.find_by(email: username_or_email) || User.find_by(username: username_or_email)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
