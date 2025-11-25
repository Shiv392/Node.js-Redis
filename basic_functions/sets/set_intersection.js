const redis_client = require('../../config/redis_config');

const set_intersection = async () => {
  try {
    // (Optional) Clear old values for clean output
    await redis_client.del('frontend_skills');
    await redis_client.del('backend_skills');

    // Add sample sets
    await redis_client.sAdd('frontend_skills', 'React.js', 'Angular', 'Tailwind');
    await redis_client.sAdd('backend_skills', 'React.js', 'Node.js', 'Spring Boot');

    // Intersection
    const commonSkills = await redis_client.sInter('frontend_skills', 'backend_skills');

    console.log("Common Skills (Intersection):", commonSkills);

  } catch (err) {
    console.log("Intersection Error -->", err);
  }
};

module.exports = set_intersection;
