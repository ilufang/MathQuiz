if (jQuery)
{
	var checkAnswers = function()
	{
		var answerStr = "";
		var answers = $(":checked");
		var score = 0;
		var count = 0;
		var correctAnswers = new Array(6);
		correctAnswers[0] = "b";
		correctAnswers[1] = "d";
		correctAnswers[2] = "c";
		correctAnswers[3] = "a";
		correctAnswers[4] = "b";
		correctAnswers[5] = "c";
		answers.each(function(i)
		{
			count++;
			//alert(correctAnswers[i]);
			//alert(answers[i]);
			if (correctAnswers[i]==answers[i].value)
			{
				score++;
			}
		});
		if (count==6)
		{
			// Finished, display score
			if(score==6)
			{
			// Perfect
			$("body").addClass("perfect");
			$("h1").text("All answers are correct. You WIN!!!");
			}else
			{
			// Display score
			$("body").addClass("done");
			$("h1").text("You answered "+score+" question(s) correctly.");
			}
		}
	}
}