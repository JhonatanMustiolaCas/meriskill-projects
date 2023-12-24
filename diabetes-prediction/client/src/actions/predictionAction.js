

export async function predictionAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data)

    // Validation
    let actionData = {
        errors: [],
        result: {}
    };
    if (Object.values(data).includes("")) {
        actionData.errors.push("All fields are required");
    }

    if (actionData.errors.length) {
        return actionData;
    }

    const {
        pregnancies,
        glucose,
        bloodPressure,
        skinThickness,
        insulin,
        bmi,
        diabetesPedigreeFunction,
        age } = data


    const url = `http://localhost:3000/api/predict?preg=${pregnancies}&gluc=${glucose}&bloop=${bloodPressure}&skit=${skinThickness}&insu=${insulin}&bmi=${bmi}&dpf=${diabetesPedigreeFunction}&age=${age}`;

    const response = await fetch(url);
    const result = await response.json();
    actionData.result = JSON.parse(result);
    console.log(actionData.result)
    return actionData;
}