// 常用内容集中在这里。时间以秒为单位，布局以720×1280设计坐标为单位。
export const config = {
  video: {width: 1080, height: 1920, fps: 30, seconds: 6},
  font: 'Arial, Helvetica, sans-serif',
  colors: {background: '#043024', light: '#355c16', card: '#fffffc', ink: '#26372b', muted: '#899184', lime: '#8bd514', title: '#d5ff71', negative: '#be8398'},
  titles: {invoice: 'Manage Invoices', transactions: 'Organize Transactions', end: ['Understand', 'Business']},
  income: [{name:'Acme Corp', amount:50268, ratio:1}, {name:'Gamma LLC', amount:41631, ratio:0.82}, {name:'Beta Studio', amount:34572, ratio:0.67}],
  transactions: [
    {name:'Gamma LLC', category:'Technology', amount:4249, icon:'⊙'},
    {name:'Tools', category:'Subscriptions', amount:-143, icon:'♢'},
    {name:'Beta Studio', category:'Freelancing', amount:1956, icon:'⊕'},
    {name:'Marketing', category:'Advertising', amount:-381, icon:'✣'},
    {name:'Acme Corp', category:'Consulting', amount:4757, icon:'⊙'},
  ],
  invoice: {brand:'Rivera Creative', number:'INV-2025-001', status:'Pending', client:'Acme Corp', clientCity:'New York, NY', clientEmail:'contact@acme.com', sender:'Alex Rivera', senderCity:'San Francisco, CA', senderEmail:'alex@rivera.co', issue:'2025-06-01', due:'2025-06-30', item:'Brand identity design', total:3500},
  expenses: [{name:'Marketing', value:4920, color:'#ffa438'}, {name:'Tools', value:4363, color:'#8bd514'}, {name:'Software', value:3988, color:'#487ef0'}],
  // 提高 speed 会加快整个巡游；保持1即为原片六秒节奏。
  speed: 1,
};
export const money = (n:number) => '$' + Math.abs(n).toLocaleString('en-US');
