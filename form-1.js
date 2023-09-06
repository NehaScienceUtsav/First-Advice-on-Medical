function calculateResults() {
    const form = document.getElementById('assessmentForm');
    const resultsContainer = document.getElementById('results');
    const totalQuestions = 10;
    let totalScore = 0;
 
    for (let i = 1; i <= totalQuestions; i++) {
        const questionName = `q${i}`;
        const selectedValue = form.elements[questionName].value;
        if (selectedValue === 'always') {
            totalScore += 3;
        } else if (selectedValue === 'somedays') {
            totalScore += 2;
        } else if (selectedValue === 'never') {
            totalScore += 1;
        }
    }

    let interpretation = '';
    if (totalScore >= 30) {
        interpretation = 'You are in a high-risk stage. Seek professional help immediately.';
    } else if (totalScore >= 20) {
        interpretation = 'You are in a moderate-risk stage. Consider seeking professional help.';
    } else {
        interpretation = 'You are in a low-risk stage. Keep monitoring your mental health.';
    }

    resultsContainer.innerHTML = `<p>Your total score is ${totalScore} out of ${totalQuestions * 3}. ${interpretation}. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.</p>`;
}
