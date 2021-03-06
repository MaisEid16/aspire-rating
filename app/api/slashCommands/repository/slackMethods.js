const axios = require('axios');
const qs = require('querystring');

/*  openDialog
*   Call a post api from slack to open a dialog for user
*   Param dialog(json) to be sent to slack
*   Param locale(string), defines the locale shortname, exists in the request. ex: JO
*   Param id(number), reuqest id. generated in the request.
*   Output: promise of of calling slack api
*/
module.exports.openDialog = (dialog, { locale, id }) => {
	const method = 'dialogs::slackMethods::openDialog';
	Logger.info(method, 'open dialog on slack', locale, id);
	return axios.post('https://slack.com/api/dialog.open', qs.stringify(dialog));
};

/*  getTargetedUser
*    call a get api from slack to get the conversations info and then extract the targeted user
*   Param token to be able to call slack
*   Param channel_id to get the username based on this directmessage channel
*   Param channel_name to make sure it is a directmessage before call the service
*   Param locale(string), defines the locale shortname, exists in the request. ex: JO
*   Param id(number), reuqest id. generated in the request.
*   Output: promise of of calling slack api with the username, if it is not a directmessage the function returns empty string
*/
module.exports.getTargetedUser = (token, { body, locale, id }) => {
	const method = 'dialogs::slackMethods::getTargetedUser';
	Logger.info(method, 'get targeted user from conversations info', body.channel_id, body.channel_name, locale, id);
	return new Promise(function (resolve, reject) {
		if (body.channel_name === 'directmessage') {
			axios.get(`https://slack.com/api/conversations.info?token=${token}&channel=${body.channel_id}&pretty=1`)
				.then((result) => resolve(result.data.channel.user))
				.catch((err) => reject(err));
		} else {
			resolve('');
		}
	});
};

/*  handleDirectMessage
*   Call a post api from slack to postMessage for user
*   Param userId
*	  Param channelId
*   Param locale(string), defines the locale shortname, exists in the request. ex: JO
*   Param id(number), reuqest id. generated in the request.
*   Output: promise of of calling slack api
*/
module.exports.sendSlackBotMessage = (messageBody, { locale, id }) => {
	const method = 'dialog::slackMethods::sendSlackBotMessage';
	Logger.info(method, 'send message to slack', locale, id);


	return axios.post('https://slack.com/api/chat.postMessage', qs.stringify(messageBody));
};
