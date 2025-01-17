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
 * @interface MessageFeedbackRequest
 */
export interface MessageFeedbackRequest {

    /**
     * Feedback rating. - `like`: Upvote as like. - `dislike`: Downvote as dislike. - `null`: Revoke upvote. 
     *
     * @type {string}
     * @memberof MessageFeedbackRequest
     */
    rating?: MessageFeedbackRequestRatingEnum;

    /**
     * User identifier.
     *
     * @type {string}
     * @memberof MessageFeedbackRequest
     */
    user: string;
}

/**
 * @export
 * @enum {string}
 */
export enum MessageFeedbackRequestRatingEnum {
    Like = 'like',
    Dislike = 'dislike',
    Null = 'null'
}

