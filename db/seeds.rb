
require 'faker'

user = User.create(name:"Landon", email:"test@test.com", password:"123456", staff_level:"Teacher" )
  hackathon = user.hackathons.create(name:"Hackathon #2 Winter 2020", active: true, date: Faker::Date.between(from: '2014-09-23', to: '2014-09-25'))
  
  puts 'seeded user and hackathon'

  objective = hackathon.objectives.create(name:'create three models', points:3, bonus:false)
  objective = hackathon.objectives.create(name:'seeds file', points:1, bonus:false)
  objective = hackathon.objectives.create(name:'create an additional model', points:1, bonus:true)

  puts 'objectives completed'

  team = hackathon.teams.create(name:'Y8Z4LYFE', total_points:100, course:'Full-time')
    4.times do 
      member = team.members.create(name:Faker::Movies::HarryPotter.character)
    end

  team = hackathon.teams.create(name:'405 Found', total_points:99, course:'Full-time')
    4.times do
      member = team.members.create(name:Faker::Movies::HarryPotter.character)
    end

  puts 'teams'

puts "Seeded succesfully. We're on our way to victory"