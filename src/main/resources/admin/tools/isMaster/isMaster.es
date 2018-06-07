import {serviceUrl} from '/lib/xp/portal';
import isMaster from '/lib/enonic/cluster/isMaster.es';

export function get() {
    const isMasterServiceUrl = serviceUrl({service: 'isMaster'});
    return {
        body: `<html><head></head><body><h1>isMaster:${isMaster()}</h1><h2>serviceUrl: <a href="${isMasterServiceUrl}">${isMasterServiceUrl}</a></h2></body></html>`,
        contentType: 'text/html; charset=utf-8'
    };
}
