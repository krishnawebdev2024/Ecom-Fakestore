

export const nav =`<nav
      class="max-w-screen-xl h-32 mx-auto flex items-center justify-between xl:flex-row sticky top-0 bg-white z-40"
    >
      <div class="logo flex items-center">
        
        <h1 class="text-3xl font-bold">Fake-Store</h1>
      </div>
      <!-------Two-nav-buttons-------->
      <div class="navButtons">
        <button
          id="homeButton"
          class="ml-6 px-10 py-3 text-white font-bold text-lg bg-black rounded-full hover:bg-gray-800 active:bg-gray-900 focus:outline-none"
        >
          Home
        </button>
        <button
          id="CartButton"
          class="ml-6 px-10 py-3 text-white font-bold text-lg bg-black rounded-full hover:bg-gray-800 active:bg-gray-900 focus:outline-none"
        >
          Cart
        </button>
      </div>
    </nav>`

export const title = `<p class="text-center mt-10 text-[#4A3AFF] text-lg font-extrabold">
      Sign up for exclusive offers and get 10% off your first order!
    </p>
    <h1 class="text-center mt-4 text-black text-5xl font-extrabold">
     Discover our best-sellers. Don’t miss out on top deals!
    </h1>
    <p class="text-center mt-4 text-[#6F6C90] text-lg font-normal">
     Customers love us for our fast shipping and great service,<br />
      Shop the latest trends. Free shipping on all orders!
    </p>`;

export const footer = `<footer
      class="bg-gray-800 bg-opacity-60 backdrop-blur-lg text-white py-6 w-full fixed bottom-0 left-0"
    >
      <div
        class="container mx-auto flex flex-col md:flex-row justify-between items-center px-8"
      >
        <div class="text-center md:text-left">
          <p class="text-sm">&copy; 2024 All rights reserved.</p>
        </div>
        <div class="mt-4 md:mt-0">
          <ul class="flex flex-wrap justify-center gap-4">
            <li><a href="#" class="hover:underline">Home</a></li>
            <li><a href="#" class="hover:underline">Cart</a></li>
          </ul>
        </div>
        <div>
          <p class="text-sm">
            Contact :
            <a href="mailto:WBS@gmail.com" class="hover:underline"
              >krisch.webdev@gmail.com</a
            >
          </p>
        </div>
      </div>
    </footer>`;

export const productsFetch = `<div
      class="Fetch mx-auto flex items-center justify-center mt-16 mb-8 sticky top-[100px] left-[50%] transform -translate-x-1/2 bg-gray-100 border border-gray-300 rounded-full inline-flex p-2 space-x-2 z-50"
    >
      <button
        id="fetch"
        class="px-6 py-2 text-white font-bold text-lg bg-[#4A3AFF] rounded-full hover:bg-[#372BFF] active:bg-[#251FFF]"
      >
        Lets Explore!!!
      </button>
      <!--  --------------------------- -->
      <button
        id="clear"
        class="hidden px-6 py-2 text-white font-bold text-lg bg-[#FF4A4A] rounded-full hover:bg-[#FF2B2B] active:bg-[#FF1F1F]"
      >
        Clear All
      </button>
    </div>`;

export const card = ` <div
      id="product-container"
      class="flex flex-wrap bg-grey-200 justify-center gap-5 p-5 max-w-screen-xl mx-auto pb-24"
    ></div>`;