﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CaerusSoft.Jernigan.Proxies;
using CaerusSoft.Jernigan.Contracts;

namespace CaerusSoft.Jernigan.Shared
{
    public static class JerniganObjectFactory
    {
        public static IJerniganManager_Emulator GetJerniganManagerEmulatorProxy()
        {
            return new JerniganManager_EmulatorProxy();
        }

        public static IJerniganManager_RealImpl GetJerniganManagerRealImplProxy()
        {
            return new JerniganManager_RealImplProxy();
        }

        public static IJerniganResourceAccess_Emulator GetJerniganResourceAccessEmulatorProxy()
        {
            return new JerniganResourceAccess_EmulatorProxy();
        }

        public static IJerniganResourceAccess_RealImpl GetJerniganResourceAccessRealImplProxy()
        {
            return new JerniganResourceAccess_RealImplProxy();
        }

        public static IAccountManager_Emulator GetAccountManagerEmulatorProxy()
        {
            return new AccountManager_EmulatorProxy();
        }

        public static IAccountManager_RealImpl GetAccountManagerRealImplProxy()
        {
            return new AccountManager_RealImplProxy();
        }

        public static IAccountResourceAccess_Emulator GetAccountResourceAccessEmulatorProxy()
        {
            return new AccountResourceAccess_EmulatorProxy();
        }

        public static IAccountResourceAccess_RealImpl GetAccountResourceAccessRealImplProxy()
        {
            return new AccountResourceAccess_RealImplProxy();
        }
    }
}
