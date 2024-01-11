import data from "@/data/data";

export default function page({ params }) {
  return (
    <div class="">
      {
        data.map((val, key) => (key == params.detail) ? (
          <div class="">
            <div class="">
              <p>{val.publikasi}</p>
              <h1>{val.judul}</h1>
              <p>{val.penulis}</p>
            </div>
            <div class="">
              <img src="" alt="" />
            </div>
            <div class="">{val.desk}</div>
          </div>
        ) : null
        )
      }
    </div>
  )
};

