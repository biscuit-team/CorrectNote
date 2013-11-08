/**
 * Created by shigong on 13-10-25.
 */

(function (I) {


	var img_url = document.getElementById('img').src;
	var new_img_canvas = I.decolorize(img_url);
	var question_position = I.get_select(I.TYPE_QUESTION, img_url);
	var answer_position = I.get_select(I.TYPE_ANSWER, img_url);

	var context = document.getElementById('canvas').getContext('2d');

	context.drawImage(new_img_canvas, 0, 0);
	context.strokeRect(question_position.left, question_position.top, question_position.width, question_position.height);
	context.strokeRect(answer_position.left, answer_position.top, answer_position.width, answer_position.height);

})(DIP);