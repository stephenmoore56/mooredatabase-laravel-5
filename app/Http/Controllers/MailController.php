<?php
/**
 * Methods for sending email using Swift Mailer
 *
 * @package  Controllers
 *
 * @author Steve Moore <stephenmoore56@msn.com>
 */

/**
 * MailController class
 *
 */
namespace App\Http\Controllers;

use Redirect, Mail;
use Config, Swift_Mailer, Swift_SmtpTransport;
use Swift_Plugins_Loggers_ArrayLogger, Swift_Plugins_LoggerPlugin, Swift_Message;
use Swift_Attachment;

class MailController extends MyBaseController {

	/**
	 * Send a test email with attachment using Swift
	 * @return mixed
	 */
	public function sendTestMailSwift() {
		try {
			// read SMTP configuration from config/mail.php
			$mail = Config::get('mail');

			// Create the Transport; use ports 25, 465 or 587
			// port 465 is typically used for TLS, 25 for unencrypted
			// connections, 587 for SSL
			$transport = Swift_SmtpTransport::newInstance()
				->setHost($mail['host'])
				->setPort($mail['port'])
				->setEncryption($mail['encryption'])
				->setUsername($mail['username'])
				->setPassword($mail['password']);

			// Create the Mailer using your created Transport
			$mailer = Swift_Mailer::newInstance($transport);

			// create and register a logger plugin
			$logger = new Swift_Plugins_Loggers_ArrayLogger();
			$mailer->registerPlugin(new Swift_Plugins_LoggerPlugin($logger));

			// Create a message
			$message = Swift_Message::newInstance()
				->setSubject('Test E-Mail')
				->setFrom([$mail['from']['address'] => $mail['from']['name']])
				->addTo($mail['from']['address'], $mail['from']['name'])
				->setContentType('text/html')
				->setPriority(1)// highest; range is from 1 to 5
				->setBody('This test e-mail was sent from laravel.moore-database.com using Swift Mailer.');

			// create an attachment
			$attachment = Swift_Attachment::fromPath(public_path() . '/docs/resume_SRM_2016.docx',
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
			$attachment->setFilename('resumeStephenMoore.docx');
			$message->attach($attachment);

			// Send the message
			$result = $mailer->send($message);

			// capture log content
			$flashMessage = '';
			$mailMessage = $logger->dump();

		} catch (Exception $e) {
			$flashMessage = $e->getMessage();
		}
		return Redirect::to('/admin/menu')->with('mailMessage', $mailMessage)->with('flashMessage', $flashMessage);
	}

	/**
	 * Send a test email with attachment using Laravel Mail facade
	 * @return mixed
	 */
	public function sendTestMailLaravel() {
		try {

			// send the message
			Mail::send('emails/test', [], function ($message) {
				// read SMTP configuration from config/mail.php
				$mail = Config::get('mail');
				// configure message
				$message->from($mail['from']['address'], $mail['from']['name'])
					->to($mail['from']['address'], $mail['from']['name'])
					->subject('Test E-Mail (Laravel)')
					->attach(public_path() . '/docs/resume_SRM_2016.docx',
						array('as' => 'resumeStephenMoore.docx',
							'mime' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'));
			});
			$flashMessage = 'Test mail sent';

		} catch (Exception $e) {
			$flashMessage = $e->getMessage();
		}
		return Redirect::to('/admin/menu')->with('flashMessage', $flashMessage);
	}
}
