const isAscii = require('is-ascii');

// TODO: Expose is-ascii to dapps?
// TODO: TypeScript
// TODO: Rimble design components for connect & hello

let i = 0;

wallet.registerRpcMessageHandler(async (originString, requestObject) => {
    switch (requestObject.method) {
        case 'hello':
            i++;
            return wallet.send({
                method: 'alert',
                params: [`Hello, is '${i}' ASCII? ${
                    isAscii(String(i))
                        ? 'Yes'
                        : 'No'
                }`]
            });
        default:
            throw new Error('Method not found.')
    }
});
