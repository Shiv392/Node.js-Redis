📘 Redis Learning Repository

A hands-on repository for learning Redis, exploring data structures, caching patterns, rate limiting, pub/sub, and Node.js integration. This project is structured as multiple small modules—each demonstrating a single Redis concept with clear examples.

🚀 What You Will Learn

This repository helps you understand Redis from basics to advanced topics:

✔ Connect to Redis using Node.js ✔ Perform basic commands (GET, SET, DEL…) ✔ Implement counters (page views, hit count) ✔ Build caching layers ✔ Apply rate limiting (API protection) ✔ Use Redis Pub/Sub ✔ Work with Redis Streams ✔ Real-world usage patterns 📂 Folder Structure redis-learning/ │ ├── 01-basic-connection/ │ └── index.js # Connect to Redis │ ├── 02-basic-commands/ │ └── strings.js # GET, SET, EX, DEL │ ├── 03-counters/ │ └── visit-counter.js # INCR, DECR, INCRBY │ ├── 04-caching/ │ └── cache-middleware.js # Cache responses │ ├── 05-rate-limiting/ │ └── limiter.js # Sliding window / token bucket │ ├── 06-pub-sub/ │ └── pub.js # Publisher │ └── sub.js # Subscriber │ ├── 07-redis-streams/ │ └── producer.js # XADD │ └── consumer.js # XREAD │ └── package.json

🛠 Tech Stack

Node.js

Redis (latest version)

redis npm client

🔧 Setup and Installation 1️⃣ Clone the Repository git clone https://github.com/YOUR-USERNAME/redis-learning.git cd redis-learning

2️⃣ Install Dependencies npm install

3️⃣ Start Redis Server

If Redis is installed locally:

redis-server

Or use Docker:

docker run -d --name redis -p 6379:6379 redis

4️⃣ Configure Environment Variables

Create a .env file:

REDIS_URL=redis://127.0.0.1:6379

▶️ Running Examples Basic Connection node 01-basic-connection/index.js

Redis GET / SET Demo node 02-basic-commands/strings.js

Counter Example node 03-counters/visit-counter.js

Cache Middleware Demo node 04-caching/cache-middleware.js

Rate Limiter node 05-rate-limiting/limiter.js

Pub/Sub

Terminal 1:

node 06-pub-sub/sub.js

Terminal 2:

node 06-pub-sub/pub.js

Redis Streams

Producer:

node 07-redis-streams/producer.js

Consumer:

node 07-redis-streams/consumer.js

🧠 Learning Goals

By completing this project, you will master:

🚩 Redis Data Types

Strings

Hashes

Lists

Sets

Sorted Sets

Streams

🚩 Use cases

Caching

Microservices communication

Pub/Sub

Queues

Task scheduling

Atomic counters

API rate limiting

📌 Recommended Next Steps

After finishing this repo, try:

Use Redis to replace MySQL for a small feature

Build a URL shortener visit counter (perfect match!)

Create a Redis-backed job queue

Use Redis Cluster / Sentinel for high availability

🤝 Contributions

Pull Requests are welcome! If you want to improve examples or add more Redis patterns, feel free to contribute.

⭐ If this repo helps you, give it a star on GitHub!

It motivates the project to grow.
