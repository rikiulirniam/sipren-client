function PresensiMenu() {
  return (
    <>
      <div class="menu">
        <h3>Jurusan</h3>
        <div class="major">
          <button type="button" name="class" value="tjkt" id="tjkt">
            TJKT
          </button>
          <button type="button" name="class" value="tm" id="tm">
            TM
          </button>
          <button type="button" name="class" value="tkr" id="tkr">
            TKR
          </button>
          <button type="button" name="class" value="titl" id="titl">
            TITL
          </button>
          <button type="button" name="class" value="las" id="las">
            LAS
          </button>
          <button type="button" name="class" value="toi" id="toi">
            TOI
          </button>
          <button type="button" name="class" value="dkv" id="dkv">
            DKV
          </button>
          <button type="button" name="class" value="ka" id="ka">
            KA
          </button>
          <button type="button" name="class" value="dcpf" id="bcpf">
            BCPF
          </button>
        </div>
      </div>
      <div class="menu">
        <h3>Kelas</h3>
        <div class="class">
          <label>
            <input type="radio" value="X" name="grade" />X
          </label>
          <label>
            <input type="radio" value="XI" name="grade" />
            XI
          </label>
          <label>
            <input type="radio" value="XII" name="grade" />
            XII
          </label>
          <select name="" id="classes-select"></select>
        </div>
      </div>
      <div class="menu">
        <h3>Mapel</h3>
        <div class="subject">
          <button id="produktif">Produktif</button>
          <button id="normada">Normada</button>
          <select name="" id="subjects-select"></select>
        </div>
      </div>
      <button class="menu-confirm" onclick="menu_dialog.showModal()">
        Konfirmasi
      </button>

      <x-modal-confirmation id="menu_dialog">
        <h3>Yakin konfirmasi ?</h3>
        <div>
          <button onclick="menu_dialog.close()">Batal</button>
          <button id="menu-confirm">Yakin</button>
        </div>
      </x-modal-confirmation>
    </>
  );
}

export default PresensiMenu;
