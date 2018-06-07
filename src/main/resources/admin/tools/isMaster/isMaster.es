const isMasterBean = __.newBean('com.enonic.lib.cluster.IsMasterBean');


export function get() {
    return {
        body: `<html><head></head><body><h1>${__.toNativeObject(isMasterBean.isMaster())}</h1></body></html>`,
        contentType: 'text/html; charset=utf-8'
    };
}
