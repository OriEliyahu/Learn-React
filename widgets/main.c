#include<stdio.h>
int func(int arr[], lenArr);

void main()
{
    int n;
    printf("enter number for n\n");
    scanf("%d", &n);

    int count1 = 0, count2 = 0;
    for(int i = 0; i < 672; i++)
    {
        int arr[83];
        for(int j = 0; j < 83; j++)
        {
            scanf("%d", &arr[i]);
        }

        int mofa_shlili = func(arr);

        if(mofa_shlili == n)
        {
            count1++;
        }
        else
        {
            if(mofa_shlili == 0)
            {
                count2++;
            }
        }
    }
    printf("count of mofa shlili = %d : %d\n", n, count1);
    printf("count of mofa shlili = 0 : %d\n", count2b);


}

int func(int arr[], lenArr)
{
    int count = 0;
    for(int i = 0; i < lenArr; i++)
    {
        if(arr[i] < 0)
        {
            count++;
        }
        else
        {
            if(count >= 1)
            {
                return count;
            }
        }
    }
    return 0;
}