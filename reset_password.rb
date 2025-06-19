user = User.find_by_email('qqq@gmail.com')
if user
  pseudonym = user.pseudonyms.first
  if pseudonym
    pseudonym.password = 'password'
    pseudonym.password_confirmation = 'password'
    if pseudonym.save
      puts "Password for 'qqq@gmail.com' has been reset successfully."
    else
      puts "Failed to save password: #{pseudonym.errors.full_messages.join(', ')}"
    end
  else
    puts "Pseudonym not found for user 'qqq@gmail.com'."
  end
else
  puts "User 'qqq@gmail.com' not found."
end 