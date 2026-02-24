import { getCustomerData, logoutCustomer } from '@/app/actions/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function AccountPage() {
  const customer = await getCustomerData();

  if (!customer) {
    redirect('/pages/account/login');
  }

  return (
    <div className="min-h-screen bg-[#fdf4ff] px-6 py-32 font-sans relative">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fae8ff] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#fff0f5] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl p-8 md:p-12 shadow-2xl rounded-3xl z-10 border border-white relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#601438]/10 pb-8 mb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif text-[#601438] mb-2 leading-tight font-medium">
              My Account
            </h1>
            <p className="text-[#601438]/70 text-lg">
              Welcome back, {customer.firstName} {customer.lastName}
            </p>
          </div>
          <form action={logoutCustomer} className="mt-6 md:mt-0">
            <button className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#601438] border border-[#601438] px-6 py-3 rounded-xl hover:bg-[#601438] hover:text-white transition-all shadow-sm hover:shadow-md">
              Sign Out
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-serif text-[#601438] mb-6">Order History</h2>

          {customer.orders?.edges?.length === 0 ? (
            <div className="text-center py-20 bg-white/50 rounded-2xl border border-[#601438]/5 shadow-inner">
              <p className="text-[#601438]/60 mb-6 text-lg font-light">No orders yet</p>
              <Link href="/collections/all" className="inline-block bg-[#601438] hover:bg-[#4a0e2d] text-white py-4 px-10 rounded-xl font-bold text-[11px] tracking-[0.2em] uppercase transition-all shadow-lg hover:shadow-xl">
                Go to store to place an order
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {customer.orders.edges.map(({ node }: any) => (
                <div key={node.id} className="bg-white/80 p-6 rounded-2xl border border-[#601438]/10 shadow-sm flex flex-col sm:flex-row justify-between gap-6 hover:shadow-md transition-shadow">
                  <div>
                    <p className="text-[#601438] font-bold text-lg mb-1">Order #{node.orderNumber}</p>
                    <p className="text-sm text-[#601438]/70 mb-3">
                      {new Date(node.processedAt).toLocaleDateString('en-US', {
                        month: 'long', day: 'numeric', year: 'numeric'
                      })}
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2 mt-3 bg-white/50 p-4 rounded-xl border border-gray-50">
                      {node.lineItems.edges.map(({ node: item }: any, index: number) => (
                        <li key={index} className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#601438]/30"></span>
                            <span className="font-medium text-gray-900">{item.quantity}x</span> {item.title}
                          </div>
                          {item.variant?.title && item.variant.title !== 'Default Title' && (
                            <span className="text-xs text-gray-500 sm:ml-4">({item.variant.title})</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-left sm:text-right flex flex-col justify-start">
                    <p className="text-xl font-semibold text-[#601438] mb-2">
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: node.totalPrice.currencyCode }).format(node.totalPrice.amount)}
                    </p>
                    <div className="flex gap-2 sm:justify-end mt-1">
                      <span className="inline-block px-3 py-1 bg-green-50 text-green-700 border border-green-100 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                        {node.financialStatus === 'PAID' ? 'Paid' : node.financialStatus}
                      </span>
                      {node.fulfillmentStatus === 'FULFILLED' && (
                        <span className="inline-block px-3 py-1 bg-[#fdf4ff] text-[#601438] border border-[#fae8ff] rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                          Fulfilled
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
