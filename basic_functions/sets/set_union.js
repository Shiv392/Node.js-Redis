const redis_client = require('../../config/redis_config');

const union_set = async()=>{
try{
 // Clear existing sets
    await redis_client.del('frontend_skills');
    await redis_client.del('backend_skills');

    // Add data again
    await redis_client.sAdd('frontend_skills', 'React.js', 'Angular', 'Tailwind CSS');
    await redis_client.sAdd('backend_skills', 'Node.js', 'Spring boot', 'MYSQL');

    // Check actual values
    console.log("Frontend:", await redis_client.sMembers('frontend_skills'));
    console.log("Backend:", await redis_client.sMembers('backend_skills'));

    // Perform union
    const unions_skills = await redis_client.sUnion('frontend_skills', 'backend_skills');
    console.log('Union skills:', unions_skills);
}
catch(err){
    console.log('union set err', err);
}
}
module.exports = union_set;