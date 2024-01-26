// export default function element(params) {
//   return (
//     <div className="border mx-auto" style={{ width: '60vw', height: '100vh' }}>
//       <div style={{ display: "flex", justifyContent: 'center', borderBottom: '2px solid black' }}>
//         <div class="">
//           <img
//             src={"/cropped-Logo-Cilacap 2.png"}
//             width="60"
//             style={{ marginRight: '2rem' }}
//             alt=""
//           />
//         </div>
//         <div class="">
//           <h4 style={{ marginBottom: '0', fontWeight: 'bold' }}>Lorem ipsum dolor sit amet.</h4>
//           <h4 style={{ marginBottom: '0', fontWeight: 'bold' }}>Lorem ipsum dolor sit amet.</h4>
//           <p style={{ fontSize: '15px ' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, doloribus.</p>
//         </div>
//       </div>
//       <div style={{ padding: '1.5rem' }}>
//         <span style={{ textAlign: 'end' }}>
//           <p className="">Lorem ipsum dolor sit amet.</p>
//         </span>
//         <div className="">
//           <p style={{ marginBottom: '0' }}>Lorem ipsum dolor sit.</p>
//           <p style={{ marginBottom: '0' }}>Lorem ipsum dolor sit.</p>
//           <p style={{ marginBottom: '0' }}>Lorem ipsum dolor sit.</p>
//         </div>
//         <div style={{ marginTop: '1.5rem' }}>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque assumenda autem recusandae molestiae dolorum amet quidem doloremque vitae provident consectetur deserunt voluptates ea nisi error minima repellat laborum illo possimus eum quis, temporibus eaque fugit. Minima, deleniti culpa. Optio maxime, fuga aperiam quod molestias, commodi, quia aut a soluta natus omnis ducimus ex impedit sapiente rerum culpa quidem! Modi nihil, tenetur incidunt saepe repudiandae inventore? Deserunt facere atque placeat exercitationem odit, earum iste excepturi ducimus voluptas cum vero est ea nostrum, quo maiores sint id eveniet explicabo, repudiandae hic assumenda velit. Perspiciatis beatae voluptatum nemo nisi accusantium magnam, libero distinctio?
//         </div>
//       </div>
//     </div>
//   )
// };


const element = `
  <div style="color: black">
    <div style="display: flex; justify-content: center; border-bottom: 2px solid black">
      <div>
        ${(<img src="data:image/png;base64/cropped-Logo-Cilacap 2.png" width="60" style="margin-right: 2rem" alt="" />)}
      </div>
      <div style="text-align: center">
        <h4 style="margin-bottom: 0; font-weight: bold">Minima, deleniti culpa. Optio maxime, fuga aperiam quod molestias, commodi, quia aut a soluta natus omnis ducimus ex impedit sapiente rerum</h4>
        <p style="font-size: 15px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, doloribus.</p>
      </div>
    </div>
    <div style="padding: 1.5rem">
      <span style=" text-align: end">
        <p className="">Lorem ipsum dolor sit amet.</p>
      </span>
      <div className="">
      <div style="width: 500px; margin-bottom: 2rem">
        <p style="margin-bottom: 0">Nomor : 90237428937498723</p>
        <p style="margin-bottom: 0">Lampiran : -</p>
        <p style="margin-bottom: 0">Perihal : Permohonan Izin</p>
      </div>
      <span>
        <p style="margin-bottom: 0" >Lorem ipsum dolor sit.</p>
        <p style="margin-bottom: 0" >Lorem ipsum dolor sit.</p>
        <p style="margin-bottom: 0" >Lorem ipsum dolor sit.</p>
        </span>
      </div>
      <div style="margin-top: 1.5rem">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque assumenda autem recusandae molestiae dolorum amet quidem doloremque vitae provident consectetur deserunt voluptates ea nisi error minima repellat laborum illo possimus eum quis, temporibus eaque fugit. Minima, deleniti culpa. Optio maxime, fuga aperiam quod molestias, commodi, quia aut a soluta natus omnis ducimus ex impedit sapiente rerum culpa quidem! Modi nihil, tenetur incidunt saepe repudiandae inventore? Deserunt facere atque placeat exercitationem odit, earum iste excepturi ducimus voluptas cum vero est ea nostrum, quo maiores sint id eveniet explicabo, repudiandae hic assumenda velit. Perspiciatis beatae voluptatum nemo nisi accusantium magnam, libero distinctio?
      </div>

      <div style="margin-top: 1.5rem;">
        <div style="width: 200px; text-align: center">
          <p style="margin-bottom: 0">Ponorogo, 25 Januari 2024</p>
          <p>Kepala Desa Panjeng</p>
          <p style="margin-top: 5rem; border-bottom: 2px solid black;margin-bottom: 0"><b>Arif Zuniarto</b></p>
          <p>NIP 908938234</p>
        </div>
      </div>
    </div>
  </div>
` ;

export default element;
