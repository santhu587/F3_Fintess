import React, { useState } from 'react'

const TrainingPrograms = () => {
  const [activeTab, setActiveTab] = useState('fat-loss')

  const programs = {
    'fat-loss': {
      title: 'Fat Loss',
      icon: '🔥',
      description: 'Burn calories, lose weight, and achieve a lean physique with our comprehensive fat loss program.',
      roadmap: [
        { week: 'Weeks 1-2', phase: 'Foundation', details: 'Cardio base building, full-body strength, establish routine' },
        { week: 'Weeks 3-4', phase: 'Intensity', details: 'HIIT training, circuit workouts, increased calorie burn' },
        { week: 'Weeks 5-6', phase: 'Optimization', details: 'Advanced cardio, strength maintenance, metabolic training' },
        { week: 'Weeks 7-8', phase: 'Peak Performance', details: 'Maximum fat burn, body recomposition, final push' }
      ],
      diet: {
        dailyCalories: '1,400 - 1,800',
        meals: [
          { meal: 'Breakfast', calories: '350', foods: 'Oatmeal with berries, Greek yogurt, green tea' },
          { meal: 'Mid-Morning Snack', calories: '150', foods: 'Apple with almond butter, protein shake' },
          { meal: 'Lunch', calories: '450', foods: 'Grilled chicken salad, quinoa, mixed vegetables' },
          { meal: 'Afternoon Snack', calories: '200', foods: 'Protein bar, mixed nuts, cucumber slices' },
          { meal: 'Dinner', calories: '500', foods: 'Baked salmon, sweet potato, steamed broccoli' },
          { meal: 'Evening (Optional)', calories: '100', foods: 'Herbal tea, small portion of dark chocolate' }
        ],
        macros: 'Protein: 40% | Carbs: 30% | Fats: 30%'
      }
    },
    'muscle-building': {
      title: 'Muscle Building',
      icon: '💪',
      description: 'Build lean muscle mass, increase strength, and transform your physique with progressive overload training.',
      roadmap: [
        { week: 'Weeks 1-2', phase: 'Adaptation', details: 'Full-body workouts, form perfection, muscle activation' },
        { week: 'Weeks 3-4', phase: 'Hypertrophy', details: 'Split routines, volume increase, progressive overload' },
        { week: 'Weeks 5-6', phase: 'Strength', details: 'Heavy compound lifts, power training, intensity peaks' },
        { week: 'Weeks 7-8', phase: 'Growth', details: 'Advanced techniques, muscle targeting, peak contraction' }
      ],
      diet: {
        dailyCalories: '2,500 - 3,200',
        meals: [
          { meal: 'Breakfast', calories: '600', foods: 'Whole grain toast, eggs, avocado, protein smoothie' },
          { meal: 'Pre-Workout', calories: '300', foods: 'Banana, protein shake, quick carbs' },
          { meal: 'Post-Workout', calories: '500', foods: 'Chicken breast, rice, vegetables, protein shake' },
          { meal: 'Lunch', calories: '650', foods: 'Lean beef, sweet potato, quinoa, mixed greens' },
          { meal: 'Afternoon Snack', calories: '400', foods: 'Greek yogurt, granola, nuts, fruits' },
          { meal: 'Dinner', calories: '700', foods: 'Salmon, brown rice, roasted vegetables, whole grains' },
          { meal: 'Evening', calories: '250', foods: 'Casein protein, cottage cheese, berries' }
        ],
        macros: 'Protein: 35% | Carbs: 45% | Fats: 20%'
      }
    },
    'calisthenics': {
      title: 'Calisthenics',
      icon: '🤸',
      description: 'Master bodyweight movements, build functional strength, and achieve incredible body control.',
      roadmap: [
        { week: 'Weeks 1-2', phase: 'Fundamentals', details: 'Basic movements, push-ups, pull-ups, core strength' },
        { week: 'Weeks 3-4', phase: 'Progression', details: 'Advanced variations, muscle-ups prep, handstand work' },
        { week: 'Weeks 5-6', phase: 'Mastery', details: 'Complex movements, freestyle training, flow sequences' },
        { week: 'Weeks 7-8', phase: 'Advanced', details: 'Planche training, levers, advanced skills, performance' }
      ],
      diet: {
        dailyCalories: '2,000 - 2,600',
        meals: [
          { meal: 'Breakfast', calories: '500', foods: 'Overnight oats, protein powder, fruits, nuts' },
          { meal: 'Pre-Workout', calories: '250', foods: 'Banana, dates, light protein, hydration' },
          { meal: 'Post-Workout', calories: '450', foods: 'Protein shake, complex carbs, recovery foods' },
          { meal: 'Lunch', calories: '550', foods: 'Lean protein, whole grains, vegetables, healthy fats' },
          { meal: 'Afternoon Snack', calories: '300', foods: 'Protein bar, fruits, nuts, seeds' },
          { meal: 'Dinner', calories: '600', foods: 'Fish or chicken, quinoa, vegetables, olive oil' },
          { meal: 'Evening', calories: '150', foods: 'Herbal tea, light protein, minimal carbs' }
        ],
        macros: 'Protein: 30% | Carbs: 40% | Fats: 30%'
      }
    }
  }

  const activeProgram = programs[activeTab]

  return (
    <section id="training" className="section-padding bg-elegant-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Training <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive programs designed to help you achieve your fitness goals
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(programs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg scale-105'
                  : 'bg-elegant-gray text-gray-400 hover:text-white hover:bg-elegant-light border border-elegant-light/50'
              }`}
            >
              <span className="text-2xl mr-2">{programs[key].icon}</span>
              {programs[key].title}
            </button>
          ))}
        </div>

        {/* Active Program Content */}
        <div className="elegant-card">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{activeProgram.icon}</span>
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {activeProgram.title}
                </h3>
                <p className="text-lg text-gray-300">
                  {activeProgram.description}
                </p>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="mb-10">
            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-accent-blue">📅</span> Training Roadmap
            </h4>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeProgram.roadmap.map((phase, index) => (
                <div
                  key={index}
                  className="bg-elegant-dark rounded-lg p-5 border border-elegant-light/30 hover:border-accent-blue transition-all"
                >
                  <div className="text-accent-blue font-bold text-sm mb-2">{phase.week}</div>
                  <div className="text-white font-semibold text-lg mb-2">{phase.phase}</div>
                  <div className="text-gray-400 text-sm">{phase.details}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Diet Plan */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-accent-purple">🍽️</span> Nutrition Plan
            </h4>
            <div className="bg-elegant-dark rounded-lg p-6 mb-6 border border-elegant-light/30">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Daily Calories</div>
                  <div className="text-2xl font-bold text-accent-teal">{activeProgram.diet.dailyCalories} kcal</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">Macronutrients</div>
                  <div className="text-lg font-semibold text-white">{activeProgram.diet.macros}</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {activeProgram.diet.meals.map((meal, index) => (
                <div
                  key={index}
                  className="bg-elegant-dark rounded-lg p-5 border border-elegant-light/30 hover:border-accent-purple transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent-purple"></div>
                      <span className="font-bold text-white text-lg">{meal.meal}</span>
                      <span className="text-accent-teal font-semibold">{meal.calories} kcal</span>
                    </div>
                    <div className="text-gray-300 text-sm sm:text-base">{meal.foods}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              const element = document.getElementById('register')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary w-full mt-8"
          >
            Start {activeProgram.title} Program
          </button>
        </div>
      </div>
    </section>
  )
}

export default TrainingPrograms

