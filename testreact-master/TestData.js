import Question from "./Models/Question";
import Questionnaire from "./Models/Questionnaire";
import Remark from "./Models/Remark";
import Section from "./Models/Section";

var GetTestData = function () {
  var tiQuestionSequence = 1;

  var toSectionPrivateMain = new Section({sMainSection:"Private", sSubSection:"Main", iSequence:100});
  var toSectionPrivateFood = new Section({sMainSection:"Private", sSubSection:"Food", iSequence:110});
  var toSectionPrivateAnimals = new Section({sMainSection:"Private", sSubSection:"Animals", iSequence:120});

  var toSectionSchoolFirst = new Section({sMainSection:"School", sSubSection:"First", iSequence:200});
  var toSectionSchoolLast = new Section({sMainSection:"School", sSubSection:"Last", iSequence:210});

  var toSectionHolidayLast = new Section({sMainSection:"Holiday", sSubSection:"Last", iSequence:300});
  var toSectionHolidayDream = new Section({sMainSection:"Holiday", sSubSection:"Dream", iSequence:310});


  var toQuestionnaire = new Questionnaire();

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"What is your full name?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionPrivateMain
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"How old are you?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionPrivateMain
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"Where are you from?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionPrivateMain
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"What is your favorite food?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionPrivateFood
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"How often do you eat your favorite food?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionPrivateFood
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"How often do you cook?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionPrivateFood
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"Do you have any pets?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionPrivateAnimals
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"What are their names?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionPrivateAnimals
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"What is your favorite animal and why?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionPrivateAnimals
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"When did you first do to school?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionSchoolFirst
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"Who was your best friend at this school?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionSchoolFirst
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"What was your last school?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionSchoolLast
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"Who was your favorite teacher there and why?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionSchoolLast
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"Where did your last holiday take you?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionHolidayLast
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"Did you meet any interesting people there?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionHolidayLast
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"What is your dream holiday?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionHolidayDream
  }));

  toQuestionnaire.AddQuestion(new Question({
    iSequence:tiQuestionSequence++,
    sQuestion:"When are you planning on going on your dream holiday?",
    sAnswer:"",
    bApproved:false,

    oQuestionnaire:toQuestionnaire,
    oSection:toSectionHolidayDream
  }));
};