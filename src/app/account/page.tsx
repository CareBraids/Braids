import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getCustomerDetails } from '@/lib/shopify';
import { LogOut, MapPin, Package, User } from 'lucide-react';
import Link from 'next/link';
import { logoutCustomer } from '@/app/actions/auth';

export default async function AccountPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('shopify_customer_access_token')?.value || cookieStore.get('shopify_customer_token')?.value;

  if (!token) {
    redirect('/login');
  }

  const customer = await getCustomerDetails(token);

  if (!customer) {
    // Token might be expired or invalid
    cookieStore.delete('shopify_customer_access_token');
    cookieStore.delete('shopify_customer_token');
    redirect('/login');
  }

  const addresses = customer.addresses?.edges || [];
  const orders = customer.orders?.edges || [];

  return (
    <div className="min-h-screen bg-[#fdf4ff] pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#601438] mb-2">My Account</h1>
            <p className="text-[#601438]/70">Welcome back, {customer.firstName}!</p>
          </div>
          <form action={logoutCustomer}>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-white text-[#601438] hover:bg-[#601438] hover:text-white transition-colors rounded-full border border-[#601438]/20 font-medium"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content - Orders */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#601438]/5">
              <div className="flex items-center gap-3 mb-6">
                <Package className="text-[#601438] w-6 h-6" />
                <h2 className="text-2xl font-serif text-[#601438]">Order History</h2>
              </div>

              {orders.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl">
                  <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
                  <Link href="/collections/all" className="text-[#601438] font-medium hover:underline">
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map(({ node: order }: any) => (
                    <div key={order.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-6 border border-gray-100 rounded-xl hover:border-[#601438]/20 transition-colors">
                      <div className="mb-4 md:mb-0">
                        <p className="font-semibold text-gray-900">Order {order.orderNumber}</p>
                        <p className="text-sm text-gray-500">{new Date(order.processedAt).toLocaleDateString()}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <p className="font-medium text-[#601438]">
                          {order.totalPrice.currencyCode} {order.totalPrice.amount}
                        </p>
                        <div className="flex gap-2">
                          <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full capitalize">
                            {order.fulfillmentStatus || 'Unfulfilled'}
                          </span>
                          <span className="text-xs px-3 py-1 bg-[#fdf4ff] text-[#601438] rounded-full capitalize">
                            {order.financialStatus?.toLowerCase() || 'Pending'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Profile & default address */}
          <div className="space-y-8">

            {/* Profile Info */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#601438]/5">
              <div className="flex items-center gap-3 mb-6">
                <User className="text-[#601438] w-6 h-6" />
                <h2 className="text-2xl font-serif text-[#601438]">Profile</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p><strong className="text-gray-900">Name:</strong> {customer.firstName} {customer.lastName}</p>
                <p><strong className="text-gray-900">Email:</strong> {customer.email}</p>
                {customer.phone && <p><strong className="text-gray-900">Phone:</strong> {customer.phone}</p>}
              </div>
            </div>

            {/* Addresses */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#601438]/5">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-[#601438] w-6 h-6" />
                <h2 className="text-2xl font-serif text-[#601438]">Addresses</h2>
              </div>

              {addresses.length === 0 ? (
                <p className="text-gray-500">No addresses saved yet.</p>
              ) : (
                <div className="space-y-6">
                  {addresses.map(({ node: address }: any, index: number) => (
                    <div key={address.id} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      {index === 0 && <span className="text-xs font-bold uppercase tracking-wider text-[#601438] block mb-2">Default</span>}
                      <p className="text-gray-700 leading-relaxed">
                        {address.address1}<br />
                        {address.address2 && <>{address.address2}<br /></>}
                        {address.city}, {address.province} {address.zip}<br />
                        {address.country}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
