import isMaster from '/lib/enonic/cluster/isMaster.es';

export function get() {
    return {
        body: {
            isMaster: isMaster()
        },
        contentType: 'application/json; charset=utf-8'
    };
}
