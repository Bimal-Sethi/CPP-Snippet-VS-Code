{
	"Pre-written Code": {
		"prefix": "imrvrs",
		"body": [
		  "/*",
		  "* Author: Aayush Tyagi",
		  "* Created: $CURRENT_DATE-$CURRENT_MONTH-$CURRENT_YEAR $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",
		  "* Language: C++",
		  "*/",
		  "#include<iostream>",
		  "#include<climits>",
		  "#include<numeric>",
		  "#include<algorithm>",
		  "#include<cstring>",
		  "#include<cmath>",
		  "#include<iterator>",
		  "#include<utility>",
		  "#include<array>",
		  "#include<vector>",
		  "#include<deque>",
		  "#include<queue>",
		  "#include<stack>",
		  "#include<list>",
		  "#include<forward_list>",
		  "#include<set>",
		  "#include<unordered_set>",
		  "#include<map>",
		  "//#include<unordered_map>",
		  "#include<tr1/unordered_map>",
		  "using namespace std;",
		  "using namespace std::tr1;",
		  "#define ll long long",
		  "#define ull unsigned long long",
		  "#define vi vector<int>",
		  "#define vlli vector<long long int>",
		  "#define vvi vector<vector<int>>",
		  "#define vpii vector<pair<int,int>>",
		  "#define vs vector<string>",
		  "#define lin1(x) ll int x; x = scan();",
		  "#define lin2(x,y) ll int x, y; x = scan(), y = scan();",
		  "#define lin3(x,y,z) ll int x, y, z; x = scan(), y = scan(), z = scan();",
		  "#define pb(x) push_back(x)",
		  "#define mx(a,b) (a)>(b)?(a):(b)",
		  "#define mn(a,b) (a)<(b)?(a):(b)",
		  "#define fori(s,e) for(i=s;i<=e;i++)",
		  "#define forj(s,e) for(j=s;j<=e;j++)",
		  "#define fork(s,e) for(k=s;k<=e;k++)",
		  "#define rep(i,s,e) for(int i=s;i<=e;i++)",
		  "#define brep(i,s,e) for(int i=s;i>=e;i--)",
		  "#define all(x) x.begin(),x.end()",
		  "#define mem(x,y) memset(x,y,sizeof(x));",
		  "#define bits1(x) __builtin_popcount(x)",
		  "#define pi 3.14159265358979323846264338327950",
		  "#define MOD7 1000000007",
		  "#define MOD9 1000000009",
		  "#define fast std::ios::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)",
		  "ll int gcd(ll int a, ll int b)",
    	  	  "{",
    	 	  "    if( a==0 ) return b;",
    		  "    return gcd( b%a, a );",
    		  "}",
		  "ll int fast_power(ll int base, ll int power, ll int mod)",
		  "{",
		  "    ll int result = 1;",
		  "    while(power > 0)",
		  "    {",
		  "        if(power & 1) result = (result*base) % mod;",
		  "        base = (base * base) % mod;",
		  "        power >>= 1;",
		  "    }",
		  "    return result;",
		  "}",
		  "ll int scan()",
		  "{",
		  "    ll int t=0;",
		  "    char c,ch;",
		  "    ch=getchar();",
		  "    if(ch=='-') c=getchar();",
		  "    else c=ch;",
		  "    while(c<'0' || c>'9')",
		  "      c=getchar();",
		  "    while(c>='0' && c<='9')",
		  "    {",
		  "        t=(t<<3)+(t<<1)+c-'0';",
		  "        c=getchar();",
		  "    }",
		  "    if (ch=='-' ) return -t;",
		  "    else return t;",
		  "}",
		  "int main()",
		  "{",
		  "    //fast;",
		  "    lin1(t)",
		  "    while(t--)",
		  "    {",
		  "        $2",
		  "    }",
		  "}",
		],
		"description": "Writes pre-written code automatically"
	  }
}
