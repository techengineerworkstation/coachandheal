import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useScrollPosition'

const venues = [
  {
    name: 'The Happiness Center',
    location: 'Victoria Island, Lagos',
    description: 'A serene and calm environment in the heart of Lagos, well-equipped with world-class infrastructure. They offer holistic wellness services including breathwork, meditation, yoga, and alternate medicine approaches.',
    services: ['Meditation Sessions', 'Breathwork Therapy', 'Yoga Classes', 'Holistic Wellness'],
    website: 'thehappinesscenter.ng',
    color: '#6366f1',
  },
  {
    name: 'Helping Hands Therapy Center',
    location: 'Lekki, Lagos',
    description: 'A professional therapy center offering neurofeedback, brain boost training, and comprehensive wellness support. They specialize in non-invasive approaches to help people of all ages achieve their best.',
    services: ['Neurofeedback', 'Brain Boost Training', 'Counselling', 'Cognitive Support'],
    website: 'helpinghandsng.com',
    color: '#a855f7',
  },
  {
    name: 'BTH Integrated Wellness',
    location: 'Ikeja, Lagos',
    description: 'Providing psychological and emotional support to help people develop coping skills for life\'s challenges. They focus on restructuring thoughts, managing anxiety, and building emotional strength.',
    services: ['Psychological Support', 'Emotional Wellness', 'Stress Management', 'Relationship Coaching'],
    website: 'bththerapy.com',
    color: '#ec4899',
  },
  {
    name: 'Mobile Health Consult',
    location: 'Surulere, Lagos',
    description: 'Offering completely drug-free and non-invasive approaches to improve brain function and cognitive capacity. Their assessments and wellness procedures are designed to be effective, relaxing, and enjoyable.',
    services: ['Cognitive Assessments', 'Non-Invasive Wellness', 'Brain Function Support', 'Learning Support'],
    website: 'mobilehealthconsult.org',
    color: '#06b6d4',
  },
  {
    name: 'Lagos Mind',
    location: 'Lagos Island, Lagos',
    description: 'A mental health support organization connecting people with psychosocial support and tele-counselling services. They believe seeking help is a sign of strength, not weakness.',
    services: ['Tele-Counselling', 'Psychosocial Support', 'Mental Wellness', 'Community Programs'],
    website: 'lagosmind.org',
    color: '#8b5cf6',
  },
  {
    name: 'recoveriX Lagos',
    location: 'Ikoyi, Lagos',
    description: 'Using innovative wellness technology to help people improve their physical and cognitive function. They combine movement training with real-time feedback for effective, engaging sessions.',
    services: ['Movement Therapy', 'Wellness Technology', 'Physical Rehabilitation', 'Cognitive Training'],
    website: 'lagos.recoverix.com',
    color: '#f59e0b',
  },
  {
    name: '360 Psyche',
    location: 'Wuse, Abuja',
    description: 'Superior quality and professional therapy, counselling, and coaching in the FCT. They provide a safe, confidential space for personal growth, emotional healing, and professional development.',
    services: ['Therapy & Counselling', 'Coaching Programs', 'Stress Management', 'Personal Development'],
    website: '360psyche.com',
    color: '#10b981',
  },
  {
    name: 'She Writes Woman Foundation',
    location: 'Wuse II, Abuja',
    description: 'A leading mental health organization in Nigeria offering free and affordable counselling services. They are passionate about removing the stigma around mental health and making support accessible to all.',
    services: ['Free Counselling', 'Mental Health Advocacy', 'Support Groups', 'Community Outreach'],
    website: 'shewriteswoman.com',
    color: '#f43f5e',
  },
  {
    name: 'Mind & Body Wellness Center',
    location: 'GRA, Port Harcourt',
    description: 'A welcoming wellness space in Port Harcourt offering holistic health services. From stress management to mindfulness training, they help individuals find balance in body and mind.',
    services: ['Mindfulness Training', 'Stress Management', 'Wellness Coaching', 'Group Sessions'],
    website: 'mindandbodywellnessph.com',
    color: '#0ea5e9',
  },
  {
    name: 'Rivers State University Wellness Hub',
    location: 'Port Harcourt',
    description: 'An academic wellness center providing counselling services to students and the wider community. They focus on emotional resilience, academic performance, and personal growth.',
    services: ['Student Counselling', 'Academic Support', 'Emotional Wellness', 'Life Skills Training'],
    website: 'rsu.edu.ng',
    color: '#84cc16',
  },
  {
    name: 'Wellness Alliance Nigeria',
    location: 'Bodija, Ibadan',
    description: 'A community-focused wellness center in Ibadan offering affordable coaching and therapy services. They believe everyone deserves access to quality mental and emotional support.',
    services: ['Affordable Coaching', 'Group Therapy', 'Wellness Workshops', 'Community Programs'],
    website: 'wellnessalliance.com.ng',
    color: '#d946ef',
  },
  {
    name: 'Clear Mind Counselling',
    location: 'Benin City, Edo',
    description: 'Professional counselling and wellness services in the heart of Benin City. They provide a warm, non-judgmental space for individuals and families seeking support and growth.',
    services: ['Family Counselling', 'Individual Therapy', 'Youth Programs', 'Emotional Support'],
    website: 'clearmindcounselling.com',
    color: '#14b8a6',
  },
]

export default function VenuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, 0.1)

  return (
    <section className="venues" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Where to Visit</span>
          <h2 className="section-title">
            Trusted Wellness Spaces
            <br />
            <span className="gradient-text">Across Nigeria</span>
          </h2>
          <p className="section-subtitle">
            Whether you're in Lagos, Abuja, Port Harcourt, Ibadan, or anywhere
            in between — we're connected with trusted wellness centers nationwide.
            And if you prefer the comfort of your home, our online coaching is
            available everywhere.
          </p>
        </motion.div>

        <div className="venues__grid">
          {venues.map((venue, i) => (
            <motion.div
              key={i}
              className="venue-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="venue-card__header">
                <div className="venue-card__dot" style={{ background: venue.color }} />
                <div>
                  <h3 className="venue-card__name">{venue.name}</h3>
                  <p className="venue-card__location">{venue.location}</p>
                </div>
              </div>
              <p className="venue-card__description">{venue.description}</p>
              <div className="venue-card__services">
                {venue.services.map((s, j) => (
                  <span key={j} className="venue-card__tag" style={{ borderColor: venue.color }}>
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={`https://${venue.website}`}
                className="venue-card__link"
                target="_blank"
                rel="noopener noreferrer noreferrer"
                style={{ color: venue.color }}
              >
                Visit Website &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
