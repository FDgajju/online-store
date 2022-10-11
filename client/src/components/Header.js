import Image from 'next/image';

function Header() {
  return (
    <header>
      {/* top nav */}
      <div className="flex item-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex item-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div>
          <input type="text" />
        </div>
      </div>

      {/* bottom nav */}
      <div>bottom nav</div>
    </header>
  );
}

export default Header;
