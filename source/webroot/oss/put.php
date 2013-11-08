<?php
/**
 * Created by PhpStorm.
 * User: shigong
 * Date: 13-11-1
 * Time: 下午2:37
 */
error_reporting(E_ALL ^ E_NOTICE);

require_once 'sdk/sdk.class.php';

$access_key_id = 'gpi6S27YhzP5cNuy';
$access_key_secret = 'puUPyib8e5CYE28oaPsFxBPBpk81WV';
$oss_sdk_service = new ALIOSS($access_key_id, $access_key_secret);
$bucket = 'inote';
$response;

function get_body()
{
	$body = '';
	$fh = @fopen('php://input', 'r');
	if ($fh) {
		while (!feof($fh)) {
			$s = fread($fh, 1024);
			if (is_string($s)) {
				$body .= $s;
			}
		}
		fclose($fh);
	}

	return $body;

}


if ($_REQUEST['type'] == 'file') {
	if (!array_key_exists('data', $_FILES)) {
		header('X-PHP-Response-Code: 404', true, 403);
		echo 'no file upload!';
		die();
	}
	$object = uniqid();
	$file_path = $_FILES['data']['tmp_name'];
	$response = $oss_sdk_service->upload_file_by_file($bucket, $object, $file_path);
	$result['file_id'] = $object;
} else if ($_REQUEST['type'] == 'base64') {
	$object = uniqid();
	$img = base64_decode(get_body());
	$upload_file_options = array(
		'content' => $img,
		'length' => strlen($img),
		ALIOSS::OSS_HEADERS => array(),
	);
	$response = $oss_sdk_service->upload_file_by_content($bucket, $object, $upload_file_options);
}

$result['response'] = $response;
echo(json_encode($result));
