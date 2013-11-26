function EmailAutoReply()
{
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();
  var emailAddress = sheet.getRange(lastRow, 9).getValue();
  var emailAddressConfirmation = sheet.getRange(lastRow, 18).getValue();
  var namech;
  var nameen = sheet.getRange(lastRow, 3).getValue();
  if (sheet.getRange(lastRow, 2).getValue()!="")
  {
    namech = sheet.getRange(lastRow, 2).getValue();
  }
  else
  {
    namech = nameen;
  }
  var message = "<HTML><BODY>"
      + "<p>尊敬的" + namech + "：</p>"
      + "<p>您的报名信息已经提交成功，感谢您对志行会的支持，我们将会在2月25日前通过电邮与您联络。</p>"
      + "<p>如果需要进一步交流，面试将会被安排在3月1日至3月7日之间，我们将至少提前三天通知您具体的面试时间、地点及要求。</p>"
      + "<p>如有任何疑问或要求，请通过btp@hibtp.org联系我们。敬请关注我们的主页www.hibtp.org以了解最新信息。</p>"
      + "<p>志行会 敬上</p>"
      + "</br>"
      + "<p>Dear " + nameen + ","
      + "<p>This is to acknowledge your application. Thank you for your interest in BTP. We will contanct you through email before February 25th.</p>"
      + "<p>An interview will be arranged between March 1st and March 7th. We will notify you time, venue and specifications for the interview at least three days in advance.</p>"
      + "<p>Should you have any enquiries or requests, please contanct us at btp@hibtp.org. Please stay tuned through www.hibtp.org</p>"
      + "<p>Regards,</p>"
      + "<p>Beyond The Pivot</p>"
      + "<p>---------------------------------------------</p>"
      + "<p>Think Beyond, Act Beyond</p>"
      + "<p>志乎萬物，行濟天下</p>"
  if (emailAddress == emailAddressConfirmation)
  {
    GmailApp.sendEmail(emailAddress, '【BTP】Acknowledgement of Application', "", {bcc:"btp@hibtp.org",  htmlBody:message});
    sheet.getRange(lastRow, 19).setValue("Email Sent!");
  }
  else
  {
    sheet.getRange(lastRow, 19).setValue("Email Doesn't Match");
  }
}