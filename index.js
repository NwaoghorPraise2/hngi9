const express = require ('express');

const app = express();

app.get ('/', (req, res) => {
    res.json({
        slackUsername : 'nwaoghorpraise',
        backend : true,
        age: 23,
        bio:"I write the back-end code that makes your ideas come alive.\n I'm from delta state and I'm learning nodejs."
    });
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Server Taking me to Stage 2 ${PORT}`));