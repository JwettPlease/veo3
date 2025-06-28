interface SceneGenerationRequest {
  prompt: string;
  sceneNumber: number;
  apiKey: string;
}

interface SceneGenerationResponse {
  title: string;
  concept: string;
  location: {
    name: string;
    description: string;
  };
  ambiance: string;
  cinematicSetup: {
    resolution: string;
    cameras: string[];
    lighting: string[];
  };
  characterDetails: Array<{
    name: string;
    coreConcept: string;
    physicalAttributes: string;
    voiceDialogue: string;
    demeanor: string;
  }>;
  clips: Array<{
    title: string;
    location: string;
    camera: string;
    action: string;
    dialogue: string;
    sfx: string;
  }>;
}

export const generateScene = async (request: SceneGenerationRequest): Promise<SceneGenerationResponse> => {
  const aiPrompt = `🎬 Scene ${request.sceneNumber}: "[Scene Title based on: ${request.prompt}]"
  
Scene Concept:
[Briefly describe the overall concept and setting of the scene, including any unique elements or themes.]

📍 Scene Location:
[Describe the specific location in detail, including any notable landmarks, decorations, or ambiance.]

Ambiance:
[Describe the overall atmosphere, including any sensory details like smells, sounds, or lighting.]

🎥 CINEMATIC SETUP
Resolution: 4K Ultra HD | 120fps slow-mo
Cameras:
Wide Shot: [Describe the wide shot setup]
Close-Up: [Describe the close-up setup]
Drone Cam: [Describe the drone camera setup]
Dashboard Cam: [Describe the dashboard camera setup]
Rearview Mirror Cam: [Describe the rearview mirror camera setup]
Lighting:
[Describe the lighting setup]

🎭 CHARACTERS
Character A:
Name: [Full Name]
Core Concept: [Brief description]
Physical Attributes: [Detailed description]
Voice & Dialogue: [Describe the voice and dialogue style]
Demeanor: [Brief description]

Character B:
Name: [Full Name]
Core Concept: [Brief description]
Physical Attributes: [Detailed description]
Voice & Dialogue: [Describe the voice and dialogue style]
Demeanor: [Brief description]

Character C:
Name: [Full Name]
Core Concept: [Brief description]
Physical Attributes: [Detailed description]
Voice & Dialogue: [Describe the voice and dialogue style]
Demeanor: [Brief description]

🎬 Clip 1 – "[Clip Title]"
📍 Location: [Specify location]
🎥 CAMERA: [Describe camera setup]
🎭 ACTION: [Describe key action]
🗣️ DIALOGUE: [Include character dialogue]
🔊 SFX / AUDIO NOTES: [Describe sound effects]

🎬 Clip 2 – "[Clip Title]"
📍 Location: [Specify location]
🎥 CAMERA: [Describe camera setup]
🎭 ACTION: [Describe key action]
🗣️ DIALOGUE: [Include character dialogue]
🔊 SFX / AUDIO NOTES: [Describe sound effects]

🎬 Clip 3 – "[Clip Title]"
📍 Location: [Specify location]
🎥 CAMERA: [Describe camera setup]
🎭 ACTION: [Describe key action]
🗣️ DIALOGUE: [Include character dialogue]
🔊 SFX / AUDIO NOTES: [Describe sound effects]

🎭 END SCENE:
[Describe the final shot or scene wrap-up]`;

  // In a real implementation, this would call the AI API:
  // const response = await fetch('https://api.openai.com/v1/chat/completions', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${request.apiKey}`
  //   },
  //   body: JSON.stringify({
  //     model: "gpt-4",
  //     messages: [{ role: "user", content: aiPrompt }],
  //     temperature: 0.7
  //   })
  // });
  // const data = await response.json();
  // return parseSceneResponse(data.choices[0].message.content);

  // Mock response
  return {
    title: `Scene ${request.sceneNumber}: ${request.prompt.substring(0, 30)}...`,
    concept: `A ${request.prompt} scene with dramatic tension and emotional depth`,
    location: {
      name: request.prompt.includes('space') ? 'Space Station' : 'Urban Alleyway',
      description: request.prompt.includes('space') 
        ? 'A futuristic space station orbiting Earth, with large observation windows showing the blue planet below. The station hums with machinery and blinking control panels.'
        : 'A dimly lit alley in the city, with neon signs reflecting off wet pavement. Trash cans line the walls and distant sirens can be heard.'
    },
    ambiance: request.prompt.includes('space') 
      ? 'The cold silence of space is punctuated only by the hum of machinery and occasional beeps from control panels. The air smells faintly of ozone and recycled oxygen.'
      : 'The alley is damp from recent rain, with neon signs casting colorful reflections on wet pavement. The distant hum of city traffic mixes with the occasional siren.',
    cinematicSetup: {
      resolution: "4K Ultra HD | 120fps slow-mo",
      cameras: [
        "Wide Shot: Establishing shot from high angle showing the entire location",
        "Close-Up: Tight focus on character facial expressions during key moments",
        "Drone Cam: Smooth aerial movement through the environment",
        "Dashboard Cam: Mounted inside vehicles or cockpits for immersive POV",
        "Rearview Mirror Cam: Reflective shots showing character reactions"
      ],
      lighting: [
        "Key light: Strong directional light from 45-degree angle",
        "Fill light: Soft diffused light to reduce shadows",
        "Backlight: Rim lighting to separate subjects from background",
        "Practical lights: Built into the set for realistic illumination"
      ]
    },
    characterDetails: [
      {
        name: "CAPTAIN REYES",
        coreConcept: "Seasoned space station commander with a secret",
        physicalAttributes: "Late 40s, athletic build, short salt-and-pepper hair, intense gaze",
        voiceDialogue: "Deep, authoritative voice with occasional dry humor. Uses military jargon.",
        demeanor: "Calm under pressure but shows subtle signs of stress"
      },
      {
        name: "DR. ELARA VOSS",
        coreConcept: "Brilliant but rebellious scientist",
        physicalAttributes: "Early 30s, slender, long dark hair usually tied back, expressive eyes",
        voiceDialogue: "Quick, precise speech with occasional sarcastic remarks",
        demeanor: "Intense focus with occasional flashes of emotion"
      },
      {
        name: "TECHNICIAN JAX",
        coreConcept: "Young, eager engineer",
        physicalAttributes: "Mid 20s, wiry build, messy hair, always has tools on belt",
        voiceDialogue: "Rapid-fire speech with technical terms, occasional stuttering when nervous",
        demeanor: "Nervous energy but highly competent"
      }
    ],
    clips: [
      {
        title: "Establishing Shot",
        location: "Main observation deck",
        camera: "Wide Shot: Slow pan across the station exterior",
        action: "The camera reveals the vastness of space and the station's isolation",
        dialogue: "",
        sfx: "Ambient hum of machinery, occasional beeps"
      },
      {
        title: "Confrontation",
        location: "Command center",
        camera: "Close-Up: Alternating between characters",
        action: "Captain and scientist argue about the mission",
        dialogue: "CAPTAIN REYES: 'We don't have a choice, Doctor.'\nDR. VOSS: 'There's always a choice, Captain.'",
        sfx: "Alarms blaring in background, computer voice warnings"
      },
      {
        title: "Revelation",
        location: "Engineering bay",
        camera: "Drone Cam: Circling the characters",
        action: "Technician discovers the truth about the mission",
        dialogue: "TECHNICIAN JAX: 'This... this changes everything.'",
        sfx: "Metal creaking, distant explosions"
      }
    ]
  };
};

const parseSceneResponse = (responseText: string): SceneGenerationResponse => {
  // Implementation would parse the AI's response into the structured format
  return {} as SceneGenerationResponse;
};
