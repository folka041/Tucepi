export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'super_admin';
  permissions: string[];
  created_at: string;
}

export interface AuthState {
  user: any;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  permissions: string[];
}

// Admin email addresses - in production, this should be in a database
const ADMIN_EMAILS = [
  'strip.junak@gmail.com',
];

// Super admin emails with full access
const SUPER_ADMIN_EMAILS = [
  'strip.junak@gmail.com'
];

export function isAdminEmail(email: string): boolean {
  return ADMIN_EMAILS.includes(email.toLowerCase());
}

export function isSuperAdminEmail(email: string): boolean {
  return SUPER_ADMIN_EMAILS.includes(email.toLowerCase());
}

export function getUserRole(email: string): 'user' | 'admin' | 'super_admin' {
  if (isSuperAdminEmail(email)) return 'super_admin';
  if (isAdminEmail(email)) return 'admin';
  return 'user';
}

export function getPermissions(role: string): string[] {
  switch (role) {
    case 'super_admin':
      return [
        'view_dashboard',
        'manage_bookings',
        'manage_apartments',
        'manage_users',
        'export_data',
        'delete_data',
        'system_settings'
      ];
    case 'admin':
      return [
        'view_dashboard',
        'manage_bookings',
        'manage_apartments',
        'export_data'
      ];
    default:
      return [];
  }
}

export async function checkAdminAccess(user: any): Promise<AuthState> {
  if (!user) {
    return {
      user: null,
      isAuthenticated: false,
      isAdmin: false,
      isSuperAdmin: false,
      permissions: []
    };
  }

  const email = user.email?.toLowerCase() || '';
  const role = getUserRole(email);
  const permissions = getPermissions(role);

  return {
    user,
    isAuthenticated: true,
    isAdmin: role === 'admin' || role === 'super_admin',
    isSuperAdmin: role === 'super_admin',
    permissions
  };
}

export function hasPermission(permissions: string[], requiredPermission: string): boolean {
  return permissions.includes(requiredPermission);
}