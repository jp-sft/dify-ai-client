/* tslint:disable */
/* eslint-disable */
/**
 * Chat Application API
 * API documentation for the Chat Application.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * 
 *
 * @export
 * @interface SpeechToTextRequest
 */
export interface SpeechToTextRequest {

    /**
     * Audio file. Supported formats: ['mp3', 'mp4', 'mpeg', 'mpga', 'm4a', 'wav', 'webm']. File size limit: 15MB.
     *
     * @type {Blob}
     * @memberof SpeechToTextRequest
     */
    file?: Blob;

    /**
     * User identifier.
     *
     * @type {string}
     * @memberof SpeechToTextRequest
     */
    user: string;
}
