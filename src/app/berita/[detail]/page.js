import Navbar from "@/components/Navbar";
import data from "@/data/data";

export default function page({ params }) {
  return (
    <div class="">
      <Navbar />
      <div class="p-5">
        {
          data.map((val, key) => (key == params.detail) ? (
            <div class="text-black">
              <div class="">
                <img src={val.foto} className="w-100 object-fit-cover" height={450} alt="" />
              </div>
              <div>
                <p className="fw-bold py-3 mb-0" style={{ fontSize: '17px' }}>Diterbitkan pada {val.publikasi}</p>
              </div>
              <div className="mb-4">
                <h1 className="fw-bold " style={{ fontSize: '2rem' }}>{val.judul}</h1>
                <p className="mb-0">Ditulis oleh {val.penulis}</p>
              </div>
              {/* <div class="">{val.desk}</div> */}
              <div class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt, perspiciatis deserunt veniam rem magni facilis libero, earum quaerat molestiae pariatur at dolorem natus voluptate non harum assumenda accusamus corrupti quia dignissimos. Numquam labore ullam dolor distinctio accusantium eum earum natus harum! Similique labore quo expedita illo, facilis perspiciatis amet dolorem tempora tempore natus explicabo, voluptates cum odit facere sint dignissimos laborum ratione illum unde porro neque, nobis doloribus eaque? Debitis illo minus facilis aliquid porro? Labore non laboriosam id culpa iure. Temporibus nemo nam adipisci, pariatur reiciendis quia natus excepturi quibusdam harum saepe consectetur quas unde, ipsa ex sunt quam veritatis corrupti. Corrupti sed amet sint ipsam saepe itaque, consectetur a voluptates iure veniam modi cum quos. Quasi natus quam consectetur aut error, ab vitae sit voluptatem, iure maxime aliquid ea eaque beatae ipsum tempora dicta! Corrupti accusamus dignissimos fugiat dolore iusto nisi quibusdam commodi quidem neque quam molestiae, odio numquam beatae libero necessitatibus minus! Ducimus aperiam ipsa illum vero sapiente nihil hic nostrum impedit rem corrupti accusantium, aut illo voluptatibus earum beatae facilis unde quaerat distinctio est inventore fugiat odio minima. Reiciendis excepturi quos quam vitae illum nam, quo sapiente quasi, non commodi perferendis sequi? Mollitia, nisi provident.</div>
            </div>
          ) : null
          )
        }
      </div>
    </div>
  )
};

