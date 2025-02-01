import './Experience.css';

function Experience() {
  return (
    <div className="Experience">
      <h1>My Experience</h1>
      <div className="exp-card">
        <h2> Outlier </h2>
        <h3> AI Trainer </h3>
        <div> - Engineer coding prompts designed to fail Large Language Models (LLMs), and evaluate and rewrite model-generated responses to enhance model performance based on project criteria </div>
        <div> - Debug and edit code snippets in Java and Python generated by LLMs to improve accuracy and relevance </div>
        <div> - Review tasks completed by other contributors, providing helpful feedback and edits to ensure quality </div>
      </div>
      <div className="exp-card">
        <h2> Revvity </h2>
        <h3> Software Engineer Intern </h3>
        <div> - Developed a machine learning model to classify mouse poses (laying on back, stomach, side) in a given image for health condition detection with 90+% accuracy using PyTorch and AlexNet CNN architecture </div>
        <div> - Trained existing machine learning model used for health condition detection in mice by tagging and labeling mice anatomy on 200+ images using Computer Vision Annotation Tool (CVAT) </div>
        <div> - Mapped coordinates of input fields on dry blood spot cards used for newborn screening using React and GIMP </div>
      </div>
      <div className="exp-card">
        <h2> Northeastern Electric Racing </h2>
        <h3> Software Developer </h3>
        <div> - Debug, test, and maintain full stack of product management dashboard (FinishLineByNER), enhancing accessibility and efficiency for 200+ club members using React and TypeScript </div>
        <div> - Collaborate and communicate with Tech Lead and other developers regularly using Git/Github and Slack </div>
        <div> - Utilize the Agile method to manage projects and respond to the needs of other club subteams in a timely manner </div>
      </div>
      <div className="exp-card">
        <h2> Comet </h2>
        <h3> Project Intern </h3>
        <div> - Designed and proposed new UI/UX changes/features (e.g., a weekly calendar view) to department leads by creating website wireframes using Balsamiq, and marketed the app to recruit 12+ new active users </div>
        <div> - Flight tested beta web app by interacting with the platform, reporting bugs, and providing feedback </div>
      </div>
    </div>
  );
}

export default Experience;
