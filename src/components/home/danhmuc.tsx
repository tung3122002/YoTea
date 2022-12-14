import { Link } from "react-router-dom";
// import { useGetCatesProductQuery } from "../../../api/category";

const Category = () => {
   

    return (
        <section className="container max-w-6xl mx-auto py-7 px-3">
            <h2 className="uppercase text-center block text-[#D9A953] text-2xl font-semibold">DANH MỤC SẢN PHẨM</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
             
                    <div >
                        {/* <Link
                            to={`/danh-muc`}
                            style={{ backgroundImage: `https://yotea.vn/wp-content/uploads/2019/04/tra-sen-vang-long-nhan.png`}}
                            className="block bg-cover bg-center pt-[100%]"
                        /> */}
                        <img src="https://yotea.vn/wp-content/uploads/2019/04/tra-sen-vang-long-nhan.png" alt="" />
                        <div className="text-center py-2 leading-3">
                            <h3>
                                <Link to={`/danh-muc/`} className="block uppercase text-lg font-semibold">Trà sửa</Link>
                            </h3>
                            <span className="uppercase text-xs">10 sản phẩm</span>
                        </div>
                    </div>
                    <div >
                        {/* <Link
                            to={`/danh-muc`}
                            style={{ backgroundImage: `https://yotea.vn/wp-content/uploads/2019/04/tra-sen-vang-long-nhan.png`}}
                            className="block bg-cover bg-center pt-[100%]"
                        /> */}
                        <img src="https://yotea.vn/wp-content/uploads/2019/04/tra-sen-vang-long-nhan.png" alt="" />
                        <div className="text-center py-2 leading-3">
                            <h3>
                                <Link to={`/danh-muc/`} className="block uppercase text-lg font-semibold">Trà sửa</Link>
                            </h3>
                            <span className="uppercase text-xs">10 sản phẩm</span>
                        </div>
                    </div>
                    <div >
                        {/* <Link
                            to={`/danh-muc`}
                            style={{ backgroundImage: `https://yotea.vn/wp-content/uploads/2019/04/tra-sen-vang-long-nhan.png`}}
                            className="block bg-cover bg-center pt-[100%]"
                        /> */}
                        <img src="https://yotea.vn/wp-content/uploads/2019/04/tra-sen-vang-long-nhan.png" alt="" />
                        <div className="text-center py-2 leading-3">
                            <h3>
                                <Link to={`/danh-muc/`} className="block uppercase text-lg font-semibold">Trà sửa</Link>
                            </h3>
                            <span className="uppercase text-xs">10 sản phẩm</span>
                        </div>
                    </div>
                    <div >
                        {/* <Link
                            to={`/danh-muc`}
                            style={{ backgroundImage: `https://yotea.vn/wp-content/uploads/2019/04/tra-sen-vang-long-nhan.png`}}
                            className="block bg-cover bg-center pt-[100%]"
                        /> */}
                        <img src="https://yotea.vn/wp-content/uploads/2019/04/tra-sen-vang-long-nhan.png" alt="" />
                        <div className="text-center py-2 leading-3">
                            <h3>
                                <Link to={`/danh-muc/`} className="block uppercase text-lg font-semibold">Trà sửa</Link>
                            </h3>
                            <span className="uppercase text-xs">10 sản phẩm</span>
                        </div>
                    </div>
             
            </div>
        </section>
    )
}

export default Category;