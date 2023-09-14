import Image from 'next/image'
import User09 from '@/public/images/avatar-09.jpg'
import User12 from '@/public/images/avatar-12.jpg'
import User15 from '@/public/images/avatar-15.jpg'

function comments() {
  return (
    <div>
      <h4 className="font-bold text-slate-200 mb-2">4 comments</h4>
      {/* Comments (1st level) */}
      <ul>
        <li className="pt-4">
          <div className="mb-1">
            <div className="flex items-center mb-1">
              <Image className="rounded-full mr-2" src={User12} width={20} height={20} alt="User 12" />
              <div className="text-xs text-slate-600">
                <a className="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">
                  MaryLync77
                </a>{' '}
                · <span className="text-slate-500">20 Feb</span>
              </div>
            </div>
            <div className="text-sm text-slate-400 space-y-4 mb-1">
              <p>
                My reasons for not signing up are apparent: 1) Unable to access 2) Can't open it properly in my web browser... but I followed
                you here.
              </p>
              <p>
                Can't answer anymore to your comment. Maybe we have reached the maximum depth of a thread. Let's talk it through outside the
                Community if that makes sense to you.
              </p>
            </div>
            <div className="text-xs text-slate-600">
              <a className="font-medium text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">
                Report
              </a>{' '}
              ·{' '}
              <a className="text-slate-200 underline hover:no-underline" href="#0">
                Reply
              </a>
            </div>
          </div>
          {/* Comments (2nd level) */}
          <ul className="pl-4 border-l-2 border-slate-700">
            <li className="pt-4">
              <div className="mb-1">
                <div className="flex items-center mb-1">
                  <Image className="rounded-full mr-2" src={User09} width={20} height={20} alt="User 09" />
                  <div className="text-xs text-slate-600">
                    <a className="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">
                      zakaria_c
                    </a>{' '}
                    · <span className="text-slate-500">20 Feb</span>
                  </div>
                </div>
                <div className="text-sm text-slate-400 space-y-4 mb-1">
                  <p>A very well written Comment. Thank you.</p>
                </div>
                <div className="text-xs text-slate-600">
                  <a className="font-medium text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">
                    Report
                  </a>{' '}
                  ·{' '}
                  <a className="text-slate-200 underline hover:no-underline" href="#0">
                    Reply
                  </a>
                </div>
              </div>
              {/* Comment (3rd level) */}
              <ul className="pl-4 border-l-2 border-slate-700">
                <li className="pt-4">
                  <div className="mb-1">
                    <div className="flex items-center mb-1">
                      <Image className="rounded-full mr-2" src={User12} width={20} height={20} alt="User 12" />
                      <div className="text-xs text-slate-600">
                        <a className="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">
                          MaryLync77
                        </a>{' '}
                        · <span className="text-slate-500">20 Feb</span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-400 space-y-4 mb-1">
                      <p>Thanks for ur kindly comment. Tbh im totally new to Webflow and still figure it out haha</p>
                    </div>
                    <div className="text-xs text-slate-600">
                      <a className="font-medium text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">
                        Report
                      </a>{' '}
                      ·{' '}
                      <a className="text-slate-200 underline hover:no-underline" href="#0">
                        Reply
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="pt-4">
          <div className="mb-1">
            <div className="flex items-center mb-1">
              <Image className="rounded-full mr-2" src={User15} width={20} height={20} alt="User 15" />
              <div className="text-xs text-slate-600">
                <a className="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">
                  PhilipSnyder
                </a>{' '}
                · <span className="text-slate-500">20 Feb</span>
              </div>
            </div>
            <div className="text-sm text-slate-400 space-y-4 mb-1">
              <p>You could always do both, post from your product profile and occassionally share/interact from your personal profile.</p>
              <p>
                Andrew Gazdecki does this in a very entertaining way with MicroAcquire, it looks like he's basically talking to himself via
                the two accounts sometimes, very amusing.
              </p>
            </div>
            <div className="text-xs text-slate-600">
              <a className="font-medium text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">
                Report
              </a>{' '}
              ·{' '}
              <a className="text-slate-200 underline hover:no-underline" href="#0">
                Reply
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default comments