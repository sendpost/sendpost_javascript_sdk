/**
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Attachment from './Attachment';
import From from './From';
import ReplyTo from './ReplyTo';
import To from './To';

/**
 * The EmailMessage model module.
 * @module sendpost/model/EmailMessage
 * @version 1.0.0
 */
class EmailMessage {
    /**
     * Constructs a new <code>EmailMessage</code>.
     * @alias module:sendpost/model/EmailMessage
     */
    constructor() { 
        
        EmailMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendpost/model/EmailMessage} obj Optional instance to populate.
     * @return {module:sendpost/model/EmailMessage} The populated <code>EmailMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailMessage();

            if (data.hasOwnProperty('attachments')) {
                obj['attachments'] = ApiClient.convertToType(data['attachments'], [Attachment]);
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = From.constructFromObject(data['from']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
            }
            if (data.hasOwnProperty('htmlBody')) {
                obj['htmlBody'] = ApiClient.convertToType(data['htmlBody'], 'String');
            }
            if (data.hasOwnProperty('ippool')) {
                obj['ippool'] = ApiClient.convertToType(data['ippool'], 'String');
            }
            if (data.hasOwnProperty('preText')) {
                obj['preText'] = ApiClient.convertToType(data['preText'], 'String');
            }
            if (data.hasOwnProperty('replyTo')) {
                obj['replyTo'] = ReplyTo.constructFromObject(data['replyTo']);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = ApiClient.convertToType(data['template'], 'String');
            }
            if (data.hasOwnProperty('textBody')) {
                obj['textBody'] = ApiClient.convertToType(data['textBody'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], [To]);
            }
            if (data.hasOwnProperty('trackClicks')) {
                obj['trackClicks'] = ApiClient.convertToType(data['trackClicks'], 'Boolean');
            }
            if (data.hasOwnProperty('trackOpens')) {
                obj['trackOpens'] = ApiClient.convertToType(data['trackOpens'], 'Boolean');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], Object);
            }
            if (data.hasOwnProperty('ampBody')) {
                obj['ampBody'] = ApiClient.convertToType(data['ampBody'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailMessage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailMessage</code>.
     */
    static validateJSON(data) {
        if (data['attachments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['attachments'])) {
                throw new Error("Expected the field `attachments` to be an array in the JSON data but got " + data['attachments']);
            }
            // validate the optional field `attachments` (array)
            for (const item of data['attachments']) {
                Attachment.validateJSON(item);
            };
        }
        // validate the optional field `from`
        if (data['from']) { // data not null
          From.validateJSON(data['from']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['groups'])) {
            throw new Error("Expected the field `groups` to be an array in the JSON data but got " + data['groups']);
        }
        // ensure the json data is a string
        if (data['htmlBody'] && !(typeof data['htmlBody'] === 'string' || data['htmlBody'] instanceof String)) {
            throw new Error("Expected the field `htmlBody` to be a primitive type in the JSON string but got " + data['htmlBody']);
        }
        // ensure the json data is a string
        if (data['ippool'] && !(typeof data['ippool'] === 'string' || data['ippool'] instanceof String)) {
            throw new Error("Expected the field `ippool` to be a primitive type in the JSON string but got " + data['ippool']);
        }
        // ensure the json data is a string
        if (data['preText'] && !(typeof data['preText'] === 'string' || data['preText'] instanceof String)) {
            throw new Error("Expected the field `preText` to be a primitive type in the JSON string but got " + data['preText']);
        }
        // validate the optional field `replyTo`
        if (data['replyTo']) { // data not null
          ReplyTo.validateJSON(data['replyTo']);
        }
        // ensure the json data is a string
        if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
            throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
        }
        // ensure the json data is a string
        if (data['template'] && !(typeof data['template'] === 'string' || data['template'] instanceof String)) {
            throw new Error("Expected the field `template` to be a primitive type in the JSON string but got " + data['template']);
        }
        // ensure the json data is a string
        if (data['textBody'] && !(typeof data['textBody'] === 'string' || data['textBody'] instanceof String)) {
            throw new Error("Expected the field `textBody` to be a primitive type in the JSON string but got " + data['textBody']);
        }
        if (data['to']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['to'])) {
                throw new Error("Expected the field `to` to be an array in the JSON data but got " + data['to']);
            }
            // validate the optional field `to` (array)
            for (const item of data['to']) {
                To.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['ampBody'] && !(typeof data['ampBody'] === 'string' || data['ampBody'] instanceof String)) {
            throw new Error("Expected the field `ampBody` to be a primitive type in the JSON string but got " + data['ampBody']);
        }

        return true;
    }

/**
     * @return {Array.<module:sendpost/model/Attachment>}
     */
    getAttachments() {
        return this.attachments;
    }

    /**
     * @param {Array.<module:sendpost/model/Attachment>} attachments
     */
    setAttachments(attachments) {
        this['attachments'] = attachments;
    }
/**
     * @return {module:sendpost/model/From}
     */
    getFrom() {
        return this.from;
    }

    /**
     * @param {module:sendpost/model/From} from
     */
    setFrom(from) {
        this['from'] = from;
    }
/**
     * @return {Array.<String>}
     */
    getGroups() {
        return this.groups;
    }

    /**
     * @param {Array.<String>} groups
     */
    setGroups(groups) {
        this['groups'] = groups;
    }
/**
     * @return {String}
     */
    getHtmlBody() {
        return this.htmlBody;
    }

    /**
     * @param {String} htmlBody
     */
    setHtmlBody(htmlBody) {
        this['htmlBody'] = htmlBody;
    }
/**
     * @return {String}
     */
    getIppool() {
        return this.ippool;
    }

    /**
     * @param {String} ippool
     */
    setIppool(ippool) {
        this['ippool'] = ippool;
    }
/**
     * @return {String}
     */
    getPreText() {
        return this.preText;
    }

    /**
     * @param {String} preText
     */
    setPreText(preText) {
        this['preText'] = preText;
    }
/**
     * @return {module:sendpost/model/ReplyTo}
     */
    getReplyTo() {
        return this.replyTo;
    }

    /**
     * @param {module:sendpost/model/ReplyTo} replyTo
     */
    setReplyTo(replyTo) {
        this['replyTo'] = replyTo;
    }
/**
     * @return {String}
     */
    getSubject() {
        return this.subject;
    }

    /**
     * @param {String} subject
     */
    setSubject(subject) {
        this['subject'] = subject;
    }
/**
     * @return {String}
     */
    getTemplate() {
        return this.template;
    }

    /**
     * @param {String} template
     */
    setTemplate(template) {
        this['template'] = template;
    }
/**
     * @return {String}
     */
    getTextBody() {
        return this.textBody;
    }

    /**
     * @param {String} textBody
     */
    setTextBody(textBody) {
        this['textBody'] = textBody;
    }
/**
     * @return {Array.<module:sendpost/model/To>}
     */
    getTo() {
        return this.to;
    }

    /**
     * @param {Array.<module:sendpost/model/To>} to
     */
    setTo(to) {
        this['to'] = to;
    }
/**
     * @return {Boolean}
     */
    getTrackClicks() {
        return this.trackClicks;
    }

    /**
     * @param {Boolean} trackClicks
     */
    setTrackClicks(trackClicks) {
        this['trackClicks'] = trackClicks;
    }
/**
     * @return {Boolean}
     */
    getTrackOpens() {
        return this.trackOpens;
    }

    /**
     * @param {Boolean} trackOpens
     */
    setTrackOpens(trackOpens) {
        this['trackOpens'] = trackOpens;
    }
/**
     * @return {Object}
     */
    getHeaders() {
        return this.headers;
    }

    /**
     * @param {Object} headers
     */
    setHeaders(headers) {
        this['headers'] = headers;
    }
/**
     * @return {String}
     */
    getAmpBody() {
        return this.ampBody;
    }

    /**
     * @param {String} ampBody
     */
    setAmpBody(ampBody) {
        this['ampBody'] = ampBody;
    }

}



/**
 * @member {Array.<module:sendpost/model/Attachment>} attachments
 */
EmailMessage.prototype['attachments'] = undefined;

/**
 * @member {module:sendpost/model/From} from
 */
EmailMessage.prototype['from'] = undefined;

/**
 * @member {Array.<String>} groups
 */
EmailMessage.prototype['groups'] = undefined;

/**
 * @member {String} htmlBody
 */
EmailMessage.prototype['htmlBody'] = undefined;

/**
 * @member {String} ippool
 */
EmailMessage.prototype['ippool'] = undefined;

/**
 * @member {String} preText
 */
EmailMessage.prototype['preText'] = undefined;

/**
 * @member {module:sendpost/model/ReplyTo} replyTo
 */
EmailMessage.prototype['replyTo'] = undefined;

/**
 * @member {String} subject
 */
EmailMessage.prototype['subject'] = undefined;

/**
 * @member {String} template
 */
EmailMessage.prototype['template'] = undefined;

/**
 * @member {String} textBody
 */
EmailMessage.prototype['textBody'] = undefined;

/**
 * @member {Array.<module:sendpost/model/To>} to
 */
EmailMessage.prototype['to'] = undefined;

/**
 * @member {Boolean} trackClicks
 */
EmailMessage.prototype['trackClicks'] = undefined;

/**
 * @member {Boolean} trackOpens
 */
EmailMessage.prototype['trackOpens'] = undefined;

/**
 * @member {Object} headers
 */
EmailMessage.prototype['headers'] = undefined;

/**
 * @member {String} ampBody
 */
EmailMessage.prototype['ampBody'] = undefined;






export default EmailMessage;

