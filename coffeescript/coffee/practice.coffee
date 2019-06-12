year = 1985
speed = 88
first_name = "Marty"
full_name = first_name + " McFly"
another_full_name = "#{first_name} McFly"

initialize_time_circuits = -> year * flux_capacitor_constant * speed

initialize_time_circuits_2 = ->
  year = 1885
  year * flux_capacitor_constant * speed

initialize_time_circuits_3 = (speed, year = 1885) ->
  year * flux_capacitor_constant * speed

initialize_time_circuits_3(88)

initialize_time_circuits_3 99

mcflys = [
   "Marty"
   "George"
   "Lorraine"
   "Dave"
   "Linda"
]

woah = [
  0, 1, 9
  6, 5, 4
  8, 0, 0
]

teachers = {
  teacher: {
    name: "Andrew Chalkley",
    hair: "Ginger"
  },
  teacher: {
    name:"Jim Hoskins",
    hair: "Ginger"
  },
  teacher: {
    name:"Pasan Premaratne",
    hair: "Black"
  }
}

teachers2 =
  teacher:
    name: "Andrew Chalkley"
    hair: "Ginger"
  teacher:
    name: "Jim Hoskins"
    hair: "Ginger"
  teacher:
    name: "Pasan Premaratne"
    hair: "Black"

days = [1..7]

tuesday_to_friday = days[1..4]

days[1..4] = ["Tuesday", "Wednesday","Thursday", "Friday"]

giveKudos = (first, second, third, rest...) ->
  addKudosToUser first, 10
  addKudosToUser second, 6
  addKudosToUser third, 2

users = ["Pasan", "Amit", "Jim", "Andrew", "Allison", "Jason", "A.J."]

giveKudos users...

class TimeMachine
  constructor: ->

time_machine = new TimeMachine

class TimeMachine
  constructor: (pilot) ->
    @pilot = pilot

time_machine = new TimeMachine "H. G. Wells"

console.log time_machine.pilot

class TimeMachine
  constructor: (@pilot) ->

class Tardis extends TimeMachine

class DeLorean extends TimeMachine


class TimeMachine
  constructor: (@pilot) ->
  go: (noise) ->
    console.log noise

class Tardis extends TimeMachine
  go: ->
    super "vorp vorp"

class DeLorean extends TimeMachine
  go: ->
    super "One point twenty-one gigawatts!"

doctors_wife = new Tardis "The Doctor"
doc_browns_wheels = new DeLorean "Marty"

doctors_wife.go()
doc_browns_wheels.go()

login() if not user?

year ?= 1885

greeting = message ? "Hello, World!"

ip = securitySystem.lastUser?().remoteSystem?.ipAddress

multiples = for num in [0..10]
                     num * 10