import ReadListTab from "./ReadListTab";
import WishlistTab from "./WishlistTab";

function ListedBooks() {
    return <section className="mx-5 lg:mx-32">
        <div className="w-full py-8 flex justify-center items-center"><h1 className="text-5xl font-bold">Books</h1></div>
        <div className="flex w-full justify-end">
            <div className="mb-8"><select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Sort By </option>
                <option>Rating</option>
                <option>Number of pages</option>
                <option>Published year</option>
            </select></div>
        </div>
        <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" defaultChecked/>
            <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-6 border-base-300">
                <ReadListTab></ReadListTab>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist" />
            <div role="tabpanel" className="tab-content bg-base-100 rounded-box p-6 border-base-300">
                <WishlistTab></WishlistTab>
            </div>
        </div>
    </section>
}

export default ListedBooks;