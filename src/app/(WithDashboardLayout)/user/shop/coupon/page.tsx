import CouponTable from "@/components/modules/shop/coupon/CouponTable";
import CreateCouponModal from "@/components/modules/shop/coupon/CreateCouponModal";

export default function ManageCouponPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">Manage Coupon</h1>
        <CreateCouponModal />
      </div>
      <div>
        <CouponTable
          coupons={[]}
          meta={{ page: 1, limit: 10, total: 100, totalPage: 2 }}
        />
      </div>
    </div>
  );
}
