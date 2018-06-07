import {serviceUrl} from 'lib/xp/portal';
import isMaster from '/lib/enonic/cluster/isMaster.es';

export function get() {
    return {
        body: `<html><head></head><body><h1>isMaster:${isMaster()}</h1><h2>serviceUrl: ${serviceUrl({service: 'isMaster'})}</h2></body></html>`,
        contentType: 'text/html; charset=utf-8'
    };
}
