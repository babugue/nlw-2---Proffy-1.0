const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // Insert data
    proffyValue = {
      name: "Diego Fernandes",
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4" ,
      whatsapp: "89987654534",
      bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
      subject: 1,
      cost: "20",
      // proffy_id will come from database
    }

    classScheduleValues = [
        // class_id will come from database after we create sign up the class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Check the inserted data

    // all proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // Consult the classes from a specific proffy
    // get with it the proffy data
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    // the time that the person works, is for an example, from 8h - 18h
    // the time from time_from (8h) needs to be before or equal the requested time
    // the time_to needs to be greater
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    // console.log(selectClassesSchedules)
})