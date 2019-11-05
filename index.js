const isAscii = require('is-ascii');

wallet.registerRpcMessageHandler(async (originString, requestObject) => {
    switch (requestObject.method) {
        case 'hello':
            return wallet.send({
                method: 'alert',
                params: [`Hello, is '13' ASCII? ${
                    isAscii('13')
                        ? 'Yes'
                        : 'No'
                }`]
            });
        default:
            throw new Error('Method not found.')
    }
});
