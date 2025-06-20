import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Configure API to use Edge Runtime
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { bmr, tdee, dailyCalories, userDetails } = await req.json();

    // Initialize the SES client
    const sesClient = new SESClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    // Format activity level for display
    const activityLevelDisplay = {
      sedentary: 'Sedentary (Little or no exercise)',
      light: 'Light (Exercise 1-3 times/week)',
      moderate: 'Moderate (Exercise 3-5 times/week)',
      active: 'Active (Exercise 6-7 times/week)',
      veryActive: 'Very Active (Hard exercise & physical job)',
    };

    // Format goal for display
    const goalDisplay = {
      lose: 'Weight Loss',
      maintain: 'Weight Maintenance',
      gain: 'Weight Gain',
    };

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #00EB2B; text-align: center;">Your Calorie Calculation Results</h1>
        
        <div style="background-color: #151515; padding: 20px; border-radius: 10px; margin: 20px 0; color: white;">
          <h2 style="color: #00EB2B;">Your Details</h2>
          <p>Gender: ${userDetails.gender.charAt(0).toUpperCase() + userDetails.gender.slice(1)}</p>
          <p>Age: ${userDetails.age} years</p>
          <p>Weight: ${userDetails.weight} ${userDetails.weightUnit}</p>
          <p>Height: ${userDetails.height} cm</p>
          <p>Activity Level: ${activityLevelDisplay[userDetails.activityLevel]}</p>
          <p>Goal: ${goalDisplay[userDetails.goal]}</p>
        </div>

        <div style="background-color: #151515; padding: 20px; border-radius: 10px; margin: 20px 0; color: white;">
          <h2 style="color: #00EB2B;">Your Results</h2>
          <div style="margin: 15px 0;">
            <h3>Basal Metabolic Rate (BMR)</h3>
            <p style="font-size: 24px; font-weight: bold;">${bmr} calories/day</p>
            <p style="color: #888;">This is the number of calories your body burns at rest.</p>
          </div>

          <div style="margin: 15px 0;">
            <h3>Total Daily Energy Expenditure (TDEE)</h3>
            <p style="font-size: 24px; font-weight: bold;">${tdee} calories/day</p>
            <p style="color: #888;">This is your BMR adjusted for your activity level.</p>
          </div>

          <div style="margin: 15px 0; background: linear-gradient(to right, #00A0FB, #00EB2B); padding: 20px; border-radius: 10px;">
            <h3>Recommended Daily Calories</h3>
            <p style="font-size: 28px; font-weight: bold;">${dailyCalories} calories/day</p>
            <p>This is your recommended daily calorie intake to achieve your ${goalDisplay[userDetails.goal].toLowerCase()} goal.</p>
          </div>
        </div>

        <div style="background-color: #151515; padding: 20px; border-radius: 10px; margin: 20px 0; color: white;">
          <h2 style="color: #00EB2B;">What Does This Mean?</h2>
          <p>Your recommended daily calorie intake is ${dailyCalories} calories per day. This is based on your BMR of ${bmr} calories, adjusted for your activity level and goals.</p>
          <p>To achieve your ${goalDisplay[userDetails.goal].toLowerCase()} goal, stick to this calorie target and combine it with regular exercise for best results.</p>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #888;">
          <p>Calculated by Onaks Fitness Calorie Calculator</p>
        </div>
      </div>
    `;

    // Create SendEmailCommand
    const command = new SendEmailCommand({
      Destination: {
        ToAddresses: [userDetails.email],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: emailContent,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Your Calorie Calculation Results - Onaks Fitness",
        },
      },
      Source: process.env.AWS_SES_FROM_EMAIL,
    });

    // Send email
    await sesClient.send(command);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 