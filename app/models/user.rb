class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_many :notes
  
  after_initialize :ensure_session_token

  attr_reader :password

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
