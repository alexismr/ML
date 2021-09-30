export default function getDescriptionMock (hasveDescription = true) {
  return hasveDescription ? {
    text: 'valor',
    plain_text: '---- tienda oficial FaunaBazar---- Somos importadores directos con venta online',
    last_updated: '2021-01-13T18:36:27.000Z',
    date_created: '2020-09-26T18:11:55.000Z',
    snapshot: {
      url: 'http://descriptions.mlstatic.com/D-MLA880910872.jpg?hash=8520c3b8559cb08aa7e782b8f5334ffe_0x0',
      width: 0,
      height: 0,
      status: 'ok',
    },
  } : null;
}
