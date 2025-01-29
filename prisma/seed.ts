import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: "John Doe",
    email: "john@doe.com",
    posts: {
      create: [
        {
          "title": "The Power of Positive Thinking",
          "content": "Explore the benefits of cultivating a positive mindset and how it can impact various aspects of life, such as relationships, career, and overall well-being.",
          "published": true
        },
        {
          "title": "Top 10 Travel Destinations for 2024",
          "content": "A curated list of exciting travel destinations to consider for the year, featuring stunning photos and brief descriptions of each location.", "published": true
        },
        {
          "title": "Easy Homemade Pizza Recipe",
          "content": "A step-by-step guide to making delicious homemade pizza from scratch, including tips for creating unique flavor combinations.", "published": true
        },  
      ],
    }
  }, {
    name: "Jane Smith",
    email: "jane@smith.com",
    posts: {
      create: [
        {
          "title": "The Benefits of Meditation",
          "content": "Discover the many benefits of meditation and how it can promote relaxation, focus, and overall well-being.", "published": true
        },
        {
          "title": "The Importance of Good Sleep",
          "content": "Learn the importance of good sleep, including the benefits of consistent sleep patterns and how it can affect your overall productivity and well-being.", "published": true
        },
        {
          "title": "Healthy Eating Habits: Tips for a Balanced Diet",
          "content": "Discover practical tips and healthy eating habits to maintain a balanced diet and promote overall health.", "published": true
        },  
      ],  
        }
        }
      ]

async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u })
  }
}

main()