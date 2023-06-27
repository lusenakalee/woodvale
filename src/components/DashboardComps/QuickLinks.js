import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  CursorArrowRaysIcon,
  DocumentArrowDownIcon,
  ExclamationTriangleIcon,
  FingerPrintIcon,
  InformationCircleIcon,
  PlusIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const solutions = [
  { name: 'Registration', description: "Add residents ", to: '#', icon: PlusIcon  },
  { name: 'Resident monitor', description: 'Check vital signs monitor log ', to: '#', icon: InformationCircleIcon},
  { name: 'Weight & B.P log', description: 'Check weight and bp log', to: '#', icon: ClipboardDocumentListIcon },
  { name: 'Report', description: 'Incident report', to: '/IncidentForm', icon: ExclamationTriangleIcon },
  { name: 'Leave', description: 'Apply  for leave of absence here', to: '#', icon: DocumentArrowDownIcon },
]
const callsToAction = [
  { name: 'Watch demo', to: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', to: '#', icon: PhoneIcon },
]

export default function QuickLinks() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-xl font-semibold leading-6 text-gray-900">
        <span><div className="">Quick Links</div></span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <Link to={item.to} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
           
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
